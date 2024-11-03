import { configs, defineConfig } from '@breadlee/eslint-config'

export default defineConfig(
  {
    ignores: ['apps', 'packages'],
  },
  ...configs.base
)