const fs = require('fs').promises;

async function showCharacters() {
  return await fs.readFile('./simpsons.json', 'utf-8')
  .then((content) => JSON.parse(content))
  .then((characters) => characters.map(({ id, name }) => console.log(`${id} - ${name}`)));
}

async function charById(id) {
  return await fs.readFile('./simpsons.json', 'utf-8')
  .then((content) => JSON.parse(content))
  .then((characters) => characters.find((char) => char.id == id))
  .then(({ id, name }) => console.log(`${id} - ${name}`))
  .catch(() => console.log('id não encontrado'));
}

charById(10);