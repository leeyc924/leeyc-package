import { configs, defineConfig } from '@breadlee/config-eslint';

export default defineConfig(...configs.base, ...configs.react, ...configs.storybook);
