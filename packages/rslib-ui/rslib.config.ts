import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';

export default defineConfig({
  source: {
    entry: {
      index: ['./src/**'],
    },
  },
  lib: [
    {
      bundle: false,
      dts: true,
      format: 'esm',
    },
  ],

  output: {
    target: 'web',
    filename: {
      css: '[name].css', // CSS 파일명 패턴
    },
    // CSS 파일 추출을 명시적으로 활성화
    emitCss: true,
    // CSS 파일도 assets으로 emit하도록 설정
    emitAssets: true,
  },
  plugins: [pluginReact()],
  tools: {
    rspack: {
      plugins: [new VanillaExtractPlugin()],
      output: {
        // CSS 파일명 패턴 설정
        assetModuleFilename: '[name].[hash][ext]',
      },
    },
    // CSS 추출 설정
    cssExtract: {
      loaderOptions: {
        // vanilla-extract CSS 파일 처리
        esModule: true,
      },
    },
  },
});
