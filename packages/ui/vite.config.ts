import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'url';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { glob } from 'glob';
import preserveDirectives from 'rollup-preserve-directives';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import packageJson from './package.json';

export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true, // index.d.ts로 병합
    }),
    tsconfigPaths(),
    vanillaExtractPlugin({
      identifiers: 'debug',
    }),
    preserveDirectives(), // use client 유지
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        ...Object.keys(packageJson.peerDependencies || {}),
        ...Object.keys(packageJson.dependencies || {}),
        'react/jsx-runtime',
      ],
      input: Object.fromEntries(
        glob
          .sync(['src/**/*.{ts,tsx}'], {
            ignore: ['src/**/*.d.ts', 'src/**/*.stories.{ts,tsx}'],
          })
          .map(file => {
            return [
              relative('src', file.slice(0, file.length - extname(file).length)),
              fileURLToPath(new URL(file, import.meta.url)),
            ];
          }),
      ),
      output: {
        chunkFileNames: 'chunk/[name].js', // 외부모듈 관련 파일 chunk/모듈명.js 로 생성
        assetFileNames: 'theme.css', // 전체 css는 dist/theme.css에 생성됩니다
        entryFileNames(info) {
          if (!info.exports.length) {
            return 'rmdir/[name].js';
          }
          return '[name].js'; // 모든 파일의 이름을 [파일명].js로 지정합니다
        },
      },
    },
  },
});
