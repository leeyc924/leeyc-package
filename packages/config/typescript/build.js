import fs from 'fs';
import path from 'path';

const srcDir = './src';
const distDir = './dist';

const files = fs.readdirSync(srcDir);

files.forEach(file => {
  const srcPath = path.join(srcDir, file);
  const distPath = path.join(distDir, file);
  fs.copyFileSync(srcPath, distPath);
});
