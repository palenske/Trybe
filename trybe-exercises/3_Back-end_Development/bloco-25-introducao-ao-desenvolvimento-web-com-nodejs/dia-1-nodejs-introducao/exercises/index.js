const readline = require('readline-sync');

let userSelect = '';
const scriptList = [
  { name: 'Calcular IMC', path: './imc.js' },
  { name: 'Calcular velocidade média', path: './velocidade.js' },
  { name: 'Acerte o número', path: './sorteio.js' },
];

do {
  userSelect = readline.questionInt(`Escolha um número correspondente ao script que quer utilizar:
${scriptList.map((script, index) => ` ${index+1} - ${script.name}`).join('\n')}\n> `);
  if(userSelect < 1 || userSelect > 3) console.log(`Seleção errada, tente outra vez\n`);
} while(userSelect < 1 || userSelect > 3);

console.log(`\n${scriptList[userSelect-1].name}`);
require(scriptList[userSelect-1].path);
