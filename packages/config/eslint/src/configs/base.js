import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
//@ts-ignore
import sortDestructureKeysPlugin from 'eslint-plugin-sort-destructure-keys';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from '../utils.js';

export const base = defineConfig(
  {
    ignores: ['.next', 'dist', 'storybook-static', 'node_modules'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    plugins: {
      'sort-destructure-keys': sortDestructureKeysPlugin,
      'unused-imports': unusedImports,
    },
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
  {
    files: ['**/*.{mjs,js,ts,tsx}'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'prefer-const': 'error',
      'no-console': 'warn',
      'no-prototype-builtins': 'warn',
      'no-return-await': 'warn',
      'no-case-declarations': 'off',
      'no-restricted-globals': 'off',
      'no-unused-expressions': 'off',
      'sort-destructure-keys/sort-destructure-keys': [2, { caseSensitive: false }],
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-loss-of-precision': 'off',
      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-vars': 'warn',
      'unused-imports/no-unused-imports': 'warn',
    },
  },
);
