// @ts-ignore
import nextPlugin from '@next/eslint-plugin-next';
import { defineConfig } from '../utils.js';

/** @type {import('typescript-eslint').Config} */
export const next = defineConfig({
  plugins: {
    '@next/next': nextPlugin,
  },
  rules: {
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs['core-web-vitals'].rules,
  },
});
