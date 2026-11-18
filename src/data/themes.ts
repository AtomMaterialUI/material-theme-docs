// Single source of truth for the 32 Material themes: src/data/themes.yml (read at build time).
import { readData } from './load';

export interface Theme {
  id: string;
  name: string;
  desc: string;
  className: string;
  light: boolean;
  group: string;
  background: string;
  foreground: string;
  text: string;
  selectBg: string;
  selectFg: string;
  selectFg2: string;
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
  yellow: string;
  blue: string;
  purple: string;
  orange: string;
  cyan: string;
  gray: string;
  error: string;
  table: string;
  tree: string;
  excluded: string;
  comments: string;
  vars: string;
  links: string;
  functions: string;
  keywords: string;
  tags: string;
  strings: string;
  operators: string;
  classes: string;
  numbers: string;
  parameters: string;
}

export const GROUP_LABELS: Record<string, string> = {
  material: 'Material',
  material2: 'Material (more)',
  other: 'Other',
  other2: 'Other (2)',
  other3: 'Other (3)',
};

const raw = readData<Record<string, Omit<Theme, 'group'>[]>>('themes.yml');

export const themeGroups: Record<string, Theme[]> = Object.fromEntries(
  Object.entries(raw).map(([group, list]) => [group, list.map((t) => ({ ...t, group }))]),
);
export const themes: Theme[] = Object.values(themeGroups).flat();
