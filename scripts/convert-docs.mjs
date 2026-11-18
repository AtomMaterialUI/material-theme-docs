#!/usr/bin/env node
// One-off converter: Jekyll docs (docs/**/*.md) -> Starlight MDX (src/content/docs/docs/**/*.mdx).
//
//   node scripts/convert-docs.mjs docs/introduction.md docs/getting-started.md
//   node scripts/convert-docs.mjs --out /tmp/out docs/*.md   (dry run into another folder)
//
// It implements the rules decided in #181 and prints a warning for everything it can't convert,
// so those spots can be fixed by hand. Deleted in the URLs and redirects ticket.
import fs from 'node:fs';
import path from 'node:path';
import { dump, load } from 'js-yaml';

const ASIDES = {
  'card-panel warn': 'caution',
  'card-panel info': 'note',
  'card-panel danger': 'danger',
  'card-panel': 'note',
};

const warnings = [];
const warn = (file, message) => warnings.push(`${file}: ${message}`);

// Splits the body into prose and fenced code blocks, so transforms never touch code.
function splitFences(body) {
  const segments = [];
  let current = { fence: false, lines: [] };
  let marker = null;

  for (const line of body.split('\n')) {
    const fence = line.match(/^\s*(```+|~~~+)/);

    if (!marker && fence) {
      segments.push(current);
      current = { fence: true, lines: [line] };
      marker = fence[1][0];
    } else if (marker && fence && fence[1][0] === marker) {
      current.lines.push(line);
      segments.push(current);
      current = { fence: false, lines: [] };
      marker = null;
    } else {
      current.lines.push(line);
    }
  }

  segments.push(current);

  return segments;
}

function convertFrontMatter(raw, file) {
  const data = load(raw) ?? {};
  const out = { title: data.title };

  if (data.description) {
    out.description = data.description;
  }

  if (data.toc === false) {
    out.tableOfContents = false;
  }

  if (Array.isArray(data.gallery)) {
    out.gallery = data.gallery;
  } else if (data.gallery?.themes) {
    out.chromeThemes = data.gallery.themes;
  } else if (data.gallery) {
    warn(file, 'unknown gallery front matter shape, left out');
  }

  if (data.wallpapers) {
    out.wallpapers = data.wallpapers;
  }

  return `---\n${dump(out, { lineWidth: -1, quotingType: "'" })}---\n`;
}

// {% for theme in site.data.themes.X %} loops (possibly several in a row) -> one component.
function convertLoops(text, file) {
  const loop = String.raw`\{%\s*for\s+(\w+)\s+in\s+([\w.]+)\s*%\}([\s\S]*?)\{%\s*endfor\s*%\}`;
  const run = new RegExp(String.raw`(?:${loop}\s*)+`, 'g');
  const one = new RegExp(loop, 'g');

  return text.replace(run, (block) => {
    const loops = [...block.matchAll(one)].map((m) => ({
      source: m[2],
      body: m[3],
    }));
    const groups = loops
      .map((l) => l.source.match(/^site\.data\.themes\.(\w+)$/)?.[1])
      .filter(Boolean);
    const body = loops[0].body;

    if (loops[0].source === 'site.data.contributors') {
      return '';
    }

    if (loops[0].source === 'site.data.colors') {
      return '<PaletteColors />\n';
    }

    if (loops[0].source === 'page.wallpapers') {
      return '<Wallpapers />\n';
    }

    if (groups.length !== loops.length) {
      warn(file, `unknown loop source ${loops[0].source}`);

      return block;
    }

    const list = `groups={[${groups.map((g) => `'${g}'`).join(', ')}]}`;

    if (body.includes('theme-card.html')) {
      return `<ThemeCards ${list} />\n`;
    }

    const colors = body.match(/color\.html\s+color=theme\s+field="(\w+)"/);

    if (colors) {
      return `<ThemeColors field="${colors[1]}" ${list} />\n`;
    }

    if (/\{\{\s*theme\.name\s*\}\}/.test(body)) {
      const prefix = body.match(/>\s*([^<>{}]*?)\s*\{\{\s*theme\.name/)?.[1] ?? '';
      const prefixProp = prefix ? ` prefix="${prefix} "` : '';

      return `<ThemeList ${list}${prefixProp} />\n`;
    }

    warn(file, `unrecognised loop body for ${loops[0].source}`);

    return block;
  });
}

function convertProse(text, file) {
  let result = text;

  result = result.replace(/^[ \t]*\{%\s*include\s+carbonads\.html\s*%\}[ \t]*\n?/gm, '');

  // The wallpapers masonry wrapper is replaced together with its loop.
  result = result.replace(
    /<div class="masonry"[^>]*>\s*\{%\s*for\s+wallpaper[\s\S]*?\{%\s*endfor\s*%\}\s*<\/div>/g,
    '<Wallpapers />',
  );

  // The ul wrapping a theme loop is now rendered by the component.
  result = result.replace(
    /<ul(?: class="theme-cards")?>\s*(\{%\s*for\s+theme[\s\S]*?\{%\s*endfor\s*%\})\s*<\/ul>/g,
    '$1',
  );

  result = convertLoops(result, file);

  result = result.replace(/\{%\s*include\s+chromethemes\.html\s*%\}/g, '<ChromeThemes />');
  result = result.replace(
    /\{%\s*include\s+recommended-plugins\.html\s*%\}/g,
    '<RecommendedPlugins />',
  );
  result = result.replace(
    /\{%\s*include\s+figure\.html\s+content="([^"]*)"\s+caption="([^"]*)"\s*%\}/g,
    '<Figure content="$1" caption="$2" />',
  );

  result = result.replace(/\{\{\s*site\.baseurl\s*\}\}/g, '');
  // The only multi-line expression: the total theme count (32).
  result = result.replace(/\{\{\s*site\.data\.themes\.material\.size[\s\S]*?\}\}/g, '32');
  result = result.replace(/<!--[\s\S]*?-->\n?/g, '');
  result = result.replace(/\s+markdown="\d"/g, '');
  result = result.replace(/<(br|hr|img|input)((?:\s[^<>]*?)?)\s*\/?>/gi, '<$1$2 />');

  // Internal links get a trailing slash (trailingSlash: 'always').
  const slash = (_, start, url, hash = '', end) => {
    const clean = url.replace(/\.md$/, '');

    return `${start}${/(\/|\.[a-z0-9]+)$/i.test(clean) ? clean : `${clean}/`}${hash}${end}`;
  };

  result = result.replace(/(\]\()(\/docs\/[^)#\s]*)(#[^)\s]*)?(\))/g, slash);
  result = result.replace(/(href=")(\/docs\/[^"#]*)(#[^"]*)?(")/g, slash);

  return convertLines(result, file);
}

// Escapes MDX-significant characters, except inside inline code: braces, `<` that is not a tag,
// and markdown autolinks (<a@b.c>, <https://...>) which MDX doesn't support.
function escapeBraces(line) {
  return line
    .split(/(`+[^`]*`+)/)
    .map((part, index) =>
      index % 2
        ? part
        : part
            .replace(
              /<((?:https?:\/\/|mailto:)[^\s<>]+|[^\s<>@]+@[^\s<>]+)>/g,
              (_, target) =>
                `[${target}](${target.includes('@') && !target.startsWith('mailto:') ? `mailto:${target}` : target})`,
            )
            .replace(/<(?=[\d\s=])/g, '&lt;')
            .replace(/(?<!\\)([{}])/g, '\\$1'),
    )
    .join('');
}

const generated = /^\s*<[A-Z]\w*\b.*\/>\s*$/;
const ial = /^\{:\s*class=['"]([^'"]+)['"]\s*\}\s*$/;

function convertLines(text, file) {
  const out = [];

  for (const line of text.split('\n')) {
    const match = line.match(ial);

    if (!match) {
      out.push(generated.test(line) ? line : escapeBraces(line));
      continue;
    }

    // An IAL applies to the paragraph just above it.
    let start = out.length;

    while (start > 0 && out[start - 1].trim() !== '') {
      start--;
    }

    const block = out.splice(start);

    if (block.length === 0) {
      warn(file, `IAL {:class='${match[1]}'} with no paragraph above it`);
      continue;
    }

    if (block[0].startsWith('<Figure')) {
      out.push(...block);
      continue;
    }

    if (/^\s*([-*+]\s|\d+\.\s|#|>|<|\|)/.test(block[0])) {
      warn(
        file,
        `IAL {:class='${match[1]}'} follows a non-paragraph block: "${block[0].trim().slice(0, 40)}"`,
      );
    }

    if (match[1] === 'title') {
      out.push('<div class="title">', '', ...block, '', '</div>');
    } else if (ASIDES[match[1]]) {
      out.push(`:::${ASIDES[match[1]]}`, ...block, ':::');
    } else {
      warn(file, `unknown IAL class '${match[1]}'`);
      out.push(...block);
    }
  }

  return out.join('\n');
}

export function convert(source, file) {
  const parts = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!parts) {
    throw new Error(`${file}: no front matter`);
  }

  const frontMatter = convertFrontMatter(parts[1], file);
  const body = splitFences(parts[2])
    .map((s) => (s.fence ? s.lines.join('\n') : convertProse(s.lines.join('\n'), file)))
    .join('\n')
    .replace(/\n{3,}/g, '\n\n');

  for (const m of body.matchAll(/\{%.*?%\}|\{\{.*?\}\}/g)) {
    warn(file, `leftover Liquid: ${m[0]}`);
  }

  return `${frontMatter}\n${body.trim()}\n`;
}

function main(args) {
  let outDir = 'src/content/docs';
  const files = [];

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--out') {
      outDir = args[++i];
    } else {
      files.push(args[i]);
    }
  }

  for (const file of files) {
    const target = path.join(outDir, file.replace(/\.md$/, '.mdx'));

    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, convert(fs.readFileSync(file, 'utf8'), file));
    console.log(`${file} -> ${target}`);
  }

  warnings.forEach((w) => console.warn(`WARN ${w}`));
}

main(process.argv.slice(2));
