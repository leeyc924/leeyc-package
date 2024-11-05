import { configs, defineConfig } from '@breadlee/eslint'

export default defineConfig(
  {
    ignores: ['apps', 'packages'],
  },
  ...configs.base
)