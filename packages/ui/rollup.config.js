import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import rollupResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import preserveDirective from 'rollup-plugin-preserve-directives';
import dts from 'rollup-plugin-dts';
import pkg from './package.json' assert { type: 'json' };

const external = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})];

/**
 * @type {import('rollup').RollupOptions}
 */
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
        preserveModules: true,
        preserveModulesRoot: 'src',
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
      typescript({ useTsconfigDeclarationDir: true }),
      peerDepsExternal(),
      preserveDirective(),
    ],
  },
];

export default config;
