const fs = require('fs').promises;

async function multiWrite() {
  const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  await Promise.all(array.map((word, index) => fs.writeFile(`./file${index + 1}.txt`, word)));
}

multiWrite();