const fs = require('fs').promises;

async function showCharacters() {
  return await fs.readFile('./simpsons.json', 'utf-8')
  .then((content) => JSON.parse(content))
  .then((characters) => characters.forEach(({ id, name }) => console.log(`${id} - ${name}`)));
}

async function charById(id) {
  return await fs.readFile('./simpsons.json', 'utf-8')
  .then((content) => JSON.parse(content))
  .then((characters) => characters.find((char) => char.id == id))
  .then(({ id, name }) => console.log(`${id} - ${name}`))
  .catch(() => console.log('id não encontrado'));
}

async function removeCharacter() {
  return await fs.readFile('./simpsons.json', 'utf-8')
  .then((content) => JSON.parse(content))
  .then((characters) => characters.filter(({id}) => id !== '6' && id !== '10'))
  .then((characters) => characters.forEach(({ id, name }) => console.log(`${id} - ${name}`)));
}


removeCharacter();