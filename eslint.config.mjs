import { configs, defineConfig } from '@breadlee/config-eslint';

export default defineConfig(
  {
    ignores: ['apps', 'packages'],
  },
  ...configs.base,
);
