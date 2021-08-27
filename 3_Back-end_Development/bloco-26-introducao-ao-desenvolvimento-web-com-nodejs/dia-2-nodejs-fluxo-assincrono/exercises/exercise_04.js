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
    .then((characters) => characters.filter(({ id }) => !['6', '10'].includes(id)))
    .then((newCharacters) => fs.writeFile('./simpsons.json', JSON.stringify(newCharacters)))
    .catch((err) => err.message);
}

async function createFamily() {
  return await fs.readFile('./simpsons.json', 'utf-8')
    .then((content) => JSON.parse(content))
    .then((characters) => characters.filter(({ id }) => Number(id) > 0 && Number(id) < 5)) // faltou a Maggie ;/
    .then((simpsonsFamily) => fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily)));
}

async function adoptNelson() {
  const nelson = await fs.readFile('./simpsons.json', 'utf-8')
    .then((content) => JSON.parse(content))
    .then((characters) => characters.find(({ name }) => name === 'Nelson Muntz'));

  const simpsonsFamily = await fs.readFile('./simpsonsFamily.json', 'utf-8')
    .then((content) => JSON.parse(content));

  simpsonsFamily.push(nelson);
  fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}


// showCharacters(); // 4.1
// charById(1); // 4.2
// removeCharacter(); // 4.3
// createFamily(); // 4.4
// adoptNelson(); // 4.5