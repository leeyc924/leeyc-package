/// <reference types="../eslint-types.d.ts" />

import type { FlatCompat } from '@eslint/eslintrc';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

declare module '@eslint/compat' {
  import type { Linter } from 'eslint';
  import type { ConfigWithExtends } from 'typescript-eslint';

  export const fixupConfigRules: (config: string | Linter.Config) => ConfigWithExtends[];
}

export declare const defineConfig: typeof import('typescript-eslint').config;
export declare const compat: FlatCompat;

export declare const configs: {
  base: FlatConfig.ConfigArray;
  react: FlatConfig.ConfigArray;
  next: FlatConfig.ConfigArray;
};
