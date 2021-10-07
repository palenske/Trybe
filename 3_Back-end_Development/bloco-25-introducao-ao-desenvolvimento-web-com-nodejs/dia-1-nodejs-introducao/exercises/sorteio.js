const readline = require('readline-sync');

let rePlay = false;
const numberPLay = () => {
  const misteryNumber = Math.floor(Math.random() * 10) + 1;
  const playerNumber = readline.questionInt('Escolha um número de 1 a 10: ');
  return misteryNumber === playerNumber
    ? console.log('Parabéns, número correto!')
    : console.log(`Opa, não foi dessa vez. O número era ${misteryNumber}`);
}

do {
  numberPLay();
  rePlay = readline.keyInYN('Deseja jogar novamente?');
} while (rePlay);
