// Build-time endpoint (/material-themes.css): maps each Material theme onto Starlight's CSS custom properties.
import { themes, type Theme } from '../data/themes';

const mix = (a: string, pct: number, b: string) => `color-mix(in srgb, ${a} ${pct}%, ${b})`;

function block(t: Theme) {
  const bg = t.background;
  const strong = t.white;
  const hue = (name: string, c: string) =>
    `--sl-color-${name}: ${c}; --sl-color-${name}-low: ${mix(c, 22, bg)}; --sl-color-${name}-high: ${mix(c, 70, strong)};`;
  return `:root[data-material-theme='${t.className}'] {
  --sl-color-white: ${strong};
  --sl-color-gray-1: ${mix(t.foreground, 50, strong)};
  --sl-color-gray-2: ${t.foreground};
  --sl-color-gray-3: ${t.text};
  --sl-color-gray-4: ${t.disabled};
  --sl-color-gray-5: ${t.hl};
  --sl-color-gray-6: ${t.second};
  --sl-color-gray-7: ${t.button};
  --sl-color-black: ${bg};
  --sl-color-accent-low: ${mix(t.accent, 25, bg)};
  --sl-color-accent: ${t.accent};
  --sl-color-accent-high: ${mix(t.accent, 70, strong)};
  --sl-color-text: ${t.foreground};
  --sl-color-text-accent: ${t.accent};
  --sl-color-text-invert: ${bg};
  --sl-color-bg: ${bg};
  --sl-color-bg-nav: ${t.contrast};
  --sl-color-bg-sidebar: ${t.contrast};
  --sl-color-bg-inline-code: ${t.button};
  --sl-color-bg-accent: ${t.accent};
  --sl-color-hairline-light: ${t.border};
  --sl-color-hairline: ${t.border};
  --sl-color-hairline-shade: ${t.contrast};
  --sl-color-backdrop-overlay: ${mix(bg, 66, 'transparent')};
  ${hue('orange', t.orange)} ${hue('green', t.green)} ${hue('blue', t.blue)} ${hue('purple', t.purple)} ${hue('red', t.red)}
  --mt-code-bg: ${t.contrast};
  --mt-notif: ${t.notif};
  --mt-select-bg: ${t.selectBg};
  --mt-select-fg: ${t.selectFg};
  --mt-primary: ${t.attributes};
  --mt-accent2: ${t.accent2};
  --mt-logo: url('/img/logo/material-${t.className}.svg');
  color-scheme: ${t.light ? 'light' : 'dark'};
}`;
}

export function GET() {
  const css =
    `/* generated from src/data/themes.yml: ${themes.length} themes */\n` +
    themes.map(block).join('\n') +
    `\n::selection { background: var(--mt-select-bg); color: var(--mt-select-fg); }\n`;
  return new Response(css, { headers: { 'Content-Type': 'text/css; charset=utf-8' } });
}
