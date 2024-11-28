import commonjs from '@rollup/plugin-commonjs';
import rollupResolve from '@rollup/plugin-node-resolve';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import preserveDirective from 'rollup-plugin-preserve-directives';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json' assert { type: 'json' };

const external = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})];

/**
 * @type {import('rollup').RollupOptions}
 */
// @ts-ignore
const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.types,
        format: 'esm',
      },
    ],
    plugins: [dts()],
    external,
  },
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'esm',
        exports: 'named',
        // @ts-ignore
        banner: arg => (/components\/[^/]+\/index.js/.test(arg.fileName) ? `'use client'` : ''),
        preserveModules: true,
        preserveModulesRoot: 'src',
        // @ts-ignore
        assetFileNames(assetInfo) {
          const assetPath = assetInfo.name.replace(/^src\//, 'css/');
          return assetPath;
        },
      },
    ],
    external,
    treeshake: {
      moduleSideEffects: false,
    },
    plugins: [
      vanillaExtractPlugin(),
      rollupResolve(),
      commonjs({ include: /node_modules/ }),
      typescript({
        useTsconfigDeclarationDir: true,
        tsconfig: './tsconfig.json',
       }),
      peerDepsExternal(),
      preserveDirective(),
    ],
  },
];

export default config;
