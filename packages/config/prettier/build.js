import fs from 'fs';
import path from 'path';
import * as esbuild from 'esbuild';

const file = `./src/index.js`;
const dist = `./dist`;

const esbuildConfig = {
  entryPoints: [file],
  packages: 'external',
  bundle: true,
  sourcemap: true,
  format: 'cjs',
  target: 'es2022',
  outdir: dist,
};

await esbuild.build(esbuildConfig);

await esbuild.build({
  ...esbuildConfig,
  format: 'esm',
  outExtension: { '.js': '.mjs' },
});

const srcDts = path.resolve('./src/index.d.ts');
const distDts = path.resolve(dist, 'index.d.ts');
fs.copyFileSync(srcDts, distDts);
