/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2017 Chris Magnussen and Elior Boukhobza
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *
 */

// todo move this to its own file
const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

const themesYml = fs.readFileSync(path.resolve(__dirname, './_data/themes.yml'), {flag: 'r'});
const allThemes = yaml.load(themesYml);
const themes = [...allThemes.material,
  ...allThemes.other,
  ...allThemes.other2];

const toTheme = theme => ({
  name: theme.name,
  docId: theme.id,
  id: theme.className,
  primary: theme.attributes,
  primaryT: `${theme.attributes}70`,
  accent: theme.accent,
  accentT: `${theme.accent}70`,
  accent2: theme.keywords,
  accent2T: `${theme.keywords}70`,
  bg: theme.background,
  fg: theme.foreground,
  text: theme.text,
  selectBg: theme.selectBg,
  selectFg: theme.selectFg,
  selectFg2: theme.selectFg2,
  button: theme.button,
  secondBg: theme.second,
  disabled: theme.disabled,
  contrast: theme.contrast,
  active: theme.table,
  border: theme.border,
  hl: theme.hl,
  tree: theme.tree,
  notif: theme.notif,
  excluded: theme.excluded,

  attributes: theme.attributes,
  strings: theme.strings,
  operators: theme.operators,
  functions: theme.functions,
  keywords: theme.keywords,
  tags: theme.tags,
  numbers: theme.numbers,
  comments: theme.comments,
  vars: theme.vars,
  parameters: theme.parameters,
  links: theme.links,


  yellow: theme.yellow,
  green: theme.green,
  cyan: theme.cyan,
  blue: theme.blue,
  purple: theme.purple,
  red: theme.red,
  orange: theme.orange,
  gray: theme.comments,
  silver: theme.white,
});

const generateCSS = (theme) => {
  if (!theme) {
    return '';
  }
  return `
.theme-${theme.id} {
  --docId: ${theme.docId};
  --primary: ${theme.primary};
  --accent: ${theme.accent};
  --accent2: ${theme.accent2};
  --background: ${theme.bg};
  --foreground: ${theme.fg};
  --text: ${theme.text};
  --selectBg: ${theme.selectBg};
  --selectFg: ${theme.selectFg};
  --selectFg2: ${theme.selectFg2};
  --accent-text: ${theme.selectFg2};
  --button: ${theme.button};
  --second: ${theme.secondBg};
  --disabled: ${theme.disabled};
  --contrast: ${theme.contrast};
  --active: ${theme.active};
  --border: ${theme.border};
  --hl: ${theme.hl};
  --tree: ${theme.tree};
  --notif: ${theme.notif};
  --excluded: ${theme.excluded};

  --attributes: ${theme.attributes};
  --strings: ${theme.strings};
  --operators: ${theme.operators};
  --functions: ${theme.functions};
  --keywords: ${theme.keywords};
  --tags: ${theme.tags};
  --numbers: ${theme.numbers};
  --comments: ${theme.comments};
  --vars: ${theme.vars};
  --parameters: ${theme.parameters};
  --links: ${theme.links};
  --error: ${theme.error};
  --classes: ${theme.classes};


  --yellow: ${theme.yellow};
  --green: ${theme.green};
  --cyan: ${theme.cyan};
  --blue: ${theme.blue};
  --purple: ${theme.purple};
  --red: ${theme.red};
  --orange: ${theme.orange};
  --gray: ${theme.gray};
  --silver: ${theme.white};

  --laptop: url('../../img/themes/${theme.id}.png');
  --logo: url('../../img/logo/material-${theme.id}.svg');
}
`;
};

const getThemesCSS = () => themes.reduce((acc, item) => {
  if (!item) {
    return acc;
  }
  return acc + generateCSS(toTheme(item));
}, '');

const getThemes = () => themes.map(theme => toTheme(theme));

module.exports = {
  getThemesCSS,
  getThemes,
};
