import { configs, defineConfig } from '@breadlee/eslint';

export default defineConfig(...configs.base, ...configs.react, ...configs.storybook);
