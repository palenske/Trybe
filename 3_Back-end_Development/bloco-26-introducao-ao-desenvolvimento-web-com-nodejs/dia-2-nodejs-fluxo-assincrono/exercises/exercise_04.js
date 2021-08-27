const fs = require('fs').promises;

async function showCharacters() { // 4.1
  return await fs.readFile('./simpsons.json', 'utf-8')
  .then((content) => JSON.parse(content))
  .then((characters) => characters.forEach(({ id, name }) => console.log(`${id} - ${name}`)));
}

async function charById(id) { // 4.2
  return await fs.readFile('./simpsons.json', 'utf-8')
  .then((content) => JSON.parse(content))
  .then((characters) => characters.find((char) => char.id == id))
  .then(({ id, name }) => console.log(`${id} - ${name}`))
  .catch(() => console.log('id não encontrado'));
}

async function removeCharacter() { // 4.3
  return await fs.readFile('./simpsons.json', 'utf-8')
  .then((content) => JSON.parse(content))
  .then((characters) => characters.filter(({id}) => id !== '6' && id !== '10'))
  .then((newCharacters) => fs.writeFile('./simpsons.json', JSON.stringify(newCharacters)))
  .catch((err) => err.message);
}

async function createFamily() { // 4.3
  return await fs.readFile('./simpsons.json', 'utf-8')
  .then((content) => JSON.parse(content))
  .then((characters) => characters.filter(({id}) => Number(id) > 0 && Number(id) < 5)) // faltou a Maggie ;/
  .then((simpsonsFamily) => fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsFamily)));
}

createFamily();