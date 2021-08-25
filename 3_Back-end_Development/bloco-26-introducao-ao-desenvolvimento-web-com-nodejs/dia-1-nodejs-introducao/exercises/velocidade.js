const readline = require('readline-sync');

const dist = readline.questionInt('Informe a distância percorrida (m): ');
const temp = readline.questionInt('Informe o tempo (s): ');

const vel =( dist / temp) * 3.6;

console.log(`Velocidade média: ${vel.toFixed(0)}Km/h`);
