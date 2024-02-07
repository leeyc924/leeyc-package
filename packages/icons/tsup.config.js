import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/components/index.tsx'],
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
});
