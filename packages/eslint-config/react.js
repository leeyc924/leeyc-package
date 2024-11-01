import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import sortDestructureKeys from 'eslint-plugin-sort-destructure-keys';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import nextPlugin from '@next/eslint-plugin-next';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const tsconfigPath = path.resolve(process.cwd(), 'tsconfig.json');
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  allConfig: eslint.configs.all,
});
module.exports = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(
    compat.extends(
      'eslint-config-turbo',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:import/typescript',
      'plugin:import/recommended',
      'next/core-web-vitals',
    ),
  ),
  {
    ignores: ['**/node_modules', '**/dist'],
    files: ['**/*.{js,mjs,ts,mts,jsx,tsx}'],
    plugins: {
      react: fixupPluginRules(react),
      '@typescript-eslint': tseslint.plugin,
      'sort-destructure-keys': sortDestructureKeys,
      'react-hooks': fixupPluginRules(reactHooks),
      import: fixupPluginRules(importPlugin),
    },
    languageOptions: {
      parser: tseslint.parser,
      globals: {
        ...globals.browser,
        ...globals.node,
        React: true,
        JSX: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        tsconfigRootDir: import.meta.__dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      'import/resolver': {
        typescript: tsconfigPath,
      },
    },
    rules: {
      'react/jsx-curly-brace-presence': 'error',
      'prefer-const': 'error',
      'sort-destructure-keys/sort-destructure-keys': [
        2,
        {
          caseSensitive: false,
        },
      ],
      'react-hooks/exhaustive-deps': [
        'warn',
        {
          enableDangerousAutofixThisMayCauseInfiniteLoops: true,
        },
      ],

      'react/jsx-sort-props': [
        2,
        {
          callbacksLast: true,
          shorthandFirst: false,
          shorthandLast: true,
          multiline: 'last',
          ignoreCase: true,
          noSortAlphabetically: false,
        },
      ],

      'no-console': 'warn',
      'no-prototype-builtins': 'warn',
      'no-return-await': 'warn',
      'react-hooks/rules-of-hooks': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-case-declarations': 'off',
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      'react/display-name': 'off',
      'jsx-a11y/role-supports-aria-props': 'off',
      'no-restricted-globals': 'off',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-loss-of-precision': 'off',
      '@typescript-eslint/no-empty-interface': 'warn',
      'import/order': [
        'error',
        {
          groups: ['type', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
          pathGroups: [
            {
              pattern: '{react*, react*/**}',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@components/*/**',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['type', 'external', 'internal'],
        },
      ],
      'import/no-anonymous-default-export': 'off',
      'import/no-unresolved': 'off',
      'import/default': 'off',
      'import/no-named-as-default-member': 'off',
    },
  },
  {
    name: 'Next Plugin',
    plugins: {
      '@next/next': nextPlugin,
      rules: {
        ...nextPlugin.configs.recommended.rules,
        ...nextPlugin.configs['core-web-vitals'].rules,
      },
    },
  },
  eslintConfigPrettier,
);
