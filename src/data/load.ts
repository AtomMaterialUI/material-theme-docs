import fs from 'node:fs';
import path from 'node:path';
import { load } from 'js-yaml';

// Reads a YAML file from src/data at build time. The YAML files stay the single source of truth.
export function readData<T>(file: string): T {
  const filePath = path.resolve(process.cwd(), 'src/data', file);

  return load(fs.readFileSync(filePath, 'utf8')) as T;
}
