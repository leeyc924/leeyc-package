import { fixupConfigRules } from '@eslint/compat';
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import turboPlugin from 'eslint-plugin-turbo';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { compat, defineConfig } from '../utils.js';

export const base = defineConfig(
  {
    ignores: ['.next', 'dist', 'storybook-static', 'node_modules'],
  },
  ...fixupConfigRules(compat.extends('plugin:import/recommended')),
  ...fixupConfigRules(compat.extends('plugin:import/typescript')),
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    plugins: {
      turbo: turboPlugin,
    },
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      ...turboPlugin.configs.recommended.rules,
      'prefer-const': 'error',
      'no-console': 'warn',
      'no-prototype-builtins': 'warn',
      'no-return-await': 'warn',
      'no-case-declarations': 'off',
      'no-restricted-globals': 'off',
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-loss-of-precision': 'off',
      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      // 'import/order': [
      //   'error',
      //   {
      //     groups: ['type', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
      //     pathGroups: [
      //       {
      //         pattern: '{react*, react*/**}',
      //         group: 'external',
      //         position: 'before',
      //       },
      //       {
      //         pattern: '@components/*/**',
      //         group: 'internal',
      //         position: 'after',
      //       },
      //     ],
      //     pathGroupsExcludedImportTypes: ['type', 'external', 'internal'],
      //   },
      // ],
      'import/no-anonymous-default-export': 'off',
      'import/no-unresolved': 'off',
      'import/default': 'off',
      'import/no-named-as-default-member': 'off',
    },
  },
);
