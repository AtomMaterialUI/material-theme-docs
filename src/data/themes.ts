// Single source of truth for the 32 Material themes: src/data/themes.yml (read at build time).
import fs from 'node:fs';
import path from 'node:path';
import { load } from 'js-yaml';

export interface Theme {
  id: string;
  name: string;
  className: string;
  light: boolean;
  group: string;
  background: string;
  foreground: string;
  text: string;
  selectBg: string;
  selectFg: string;
  button: string;
  second: string;
  disabled: string;
  contrast: string;
  border: string;
  hl: string;
  notif: string;
  accent: string;
  accent2: string;
  attributes: string;
  white: string;
  green: string;
  red: string;
  blue: string;
  purple: string;
  orange: string;
}

export const GROUP_LABELS: Record<string, string> = {
  material: 'Material',
  material2: 'Material (more)',
  other: 'Other',
  other2: 'Other (2)',
  other3: 'Other (3)',
};

const file = path.resolve(process.cwd(), 'src/data/themes.yml');
const raw = load(fs.readFileSync(file, 'utf8')) as Record<string, Omit<Theme, 'group'>[]>;

export const themeGroups: Record<string, Theme[]> = Object.fromEntries(
  Object.entries(raw).map(([group, list]) => [group, list.map((t) => ({ ...t, group }))]),
);
export const themes: Theme[] = Object.values(themeGroups).flat();
