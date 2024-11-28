import fs from 'fs';
import path from 'path';

function getAllFiles(dirPath, filesArray = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, filesArray);
    } else {
      filesArray.push(filePath);
    }
  });

  return filesArray;
}
const vanillaCssList = getAllFiles('dist/css');

const contents = vanillaCssList.map(filePath => fs.readFileSync(filePath, 'utf8')).join('\n\n');
fs.writeFileSync('dist/css/index.css', contents);
