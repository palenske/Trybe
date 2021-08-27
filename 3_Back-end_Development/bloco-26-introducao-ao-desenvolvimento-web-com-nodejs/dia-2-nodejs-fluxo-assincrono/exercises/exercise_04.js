const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
  .then((content) => JSON.parse(content))
  .then((characters) => characters.map(({ id, name }) => console.log(`${id} - ${name}`)));