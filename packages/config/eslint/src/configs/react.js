import { fixupConfigRules } from '@eslint/compat';
import { compat, defineConfig } from '../utils.js';

export const react = defineConfig(
  ...fixupConfigRules(compat.extends('plugin:react/recommended')),
  ...fixupConfigRules(compat.extends('plugin:react-hooks/recommended')),
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      'react/display-name': 'off',
      'react/jsx-curly-brace-presence': 'error',
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
    },
  },
);
