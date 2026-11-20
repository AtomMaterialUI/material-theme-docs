// Typed access to the small YAML data sets (themes have their own module: ./themes.ts).
import { readData } from './load';

export interface AccentColor {
  name: string;
  color: string;
  light?: boolean;
}

// Palette colors are either a dark→light gradient (dark + light) or a single solid color.
export interface PaletteColor {
  name: string;
  dark: string;
  light: string;
  tags?: string[];
}

export const accentColors = readData<AccentColor[]>('accentColors.yml');
export const colors = readData<PaletteColor[]>('colors.yml');
