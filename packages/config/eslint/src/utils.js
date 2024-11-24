import path from 'path';
import { FlatCompat } from '@eslint/eslintrc';
import tseslint from 'typescript-eslint';

const __dirname = path.resolve();

export const defineConfig = tseslint.config;

export const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
});
