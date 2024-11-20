/// <reference types="../eslint-types.d.ts" />

import type { FlatCompat } from '@eslint/eslintrc'
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint'

export declare const defineConfig: typeof import('typescript-eslint').config
export declare const compat: FlatCompat

export declare const configs: {
  base: FlatConfig.ConfigArray
  react: FlatConfig.ConfigArray
  next: FlatConfig.ConfigArray
  storybook: FlatConfig.ConfigArray
}