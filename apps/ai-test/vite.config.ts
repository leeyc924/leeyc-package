import path, { resolve } from 'path';
import { fileURLToPath } from 'url';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { glob } from 'glob';
import preserveDirectives from 'rollup-preserve-directives';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import tsconfigPaths from 'vite-tsconfig-paths';
import packageJson from './package.json';

const external = [...Object.keys(packageJson.dependencies || {}), ...Object.keys(packageJson.peerDependencies || {})];

export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,
      exclude: ['**/*.stories.tsx', '**/*.stories.ts'],
    }),
    libInjectCss(), // css split
    tsconfigPaths(),
    vanillaExtractPlugin(),
    preserveDirectives(), // use client 유지
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      input: Object.fromEntries(
        glob
          .sync('src/**/*.{ts,tsx}', {
            ignore: ['src/**/*.d.ts', 'src/**/*.stories.{ts,tsx}'],
          })
          .map(file => {
            return [
              path.relative('src', file.slice(0, file.length - path.extname(file).length)),
              fileURLToPath(new URL(file, import.meta.url)),
            ];
          }),
      ),
      output: {
        assetFileNames(info) {
          console.log(`assetinfo`, info);
          // return name?.replace(/\.css\.ts\.css$/, '.css') ?? '';
          return 'css/[name].[extname]';
        },
        entryFileNames(info) {
          console.log(`info`, info);
          // components/**/index.css.js => components/**/styles.js
          if (/components\/.*\/index\.css$/.test(info.name)) {
            return info.name.replace(/index\.css$/, 'styles.js');
          }
          // styles/**/*.css.js => styles/**/*.js
          if (/styles\/.*\/.*\.css$/.test(info.name)) {
            return `${info.name.replace(/\.css$/, '.js')}`;
          }
          return '[name].js';
        },
      },
    },
  },
});
