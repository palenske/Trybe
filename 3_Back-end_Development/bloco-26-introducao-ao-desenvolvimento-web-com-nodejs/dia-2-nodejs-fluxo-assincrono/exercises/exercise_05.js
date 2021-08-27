const fs = require('fs').promises;

async function multiWrite() {
  const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const fileNames = [ 'file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt' ];

  await Promise.all(array.map((word, index) => fs.writeFile(`./file${index + 1}.txt`, word)));
  const files = await Promise.all(fileNames.map((file) => fs.readFile(file, 'utf-8')));
  const newFile = files.join(' ');

  await fs.writeFile('./fileAll.txt', newFile);
}

multiWrite();
