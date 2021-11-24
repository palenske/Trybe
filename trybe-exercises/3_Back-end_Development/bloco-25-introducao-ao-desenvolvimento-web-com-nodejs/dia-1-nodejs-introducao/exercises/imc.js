const readline = require('readline-sync');

const peso = readline.questionFloat("Qual o seu peso? (Kg) ");
const alt = readline.questionFloat("Qual a sua altura? (m) ");
const imc = peso / (alt ** 2);

const classifica = (imc) => {
  console.log(`Seu IMC é de: ${imc.toFixed(2)}`);
  switch (true) {
    case (imc < 18.5):
      return console.log('Situação: Abaixo do peso (magreza)');
    case (imc >= 18.5 && imc < 25):
      return console.log('Situação: Peso normal');
    case (imc >= 25 && imc < 30):
      return console.log('Situação: Acima do peso (sobrepeso)');
    case (imc >= 30 && imc < 35):
      return console.log('Situação: Obesidade grau I');
    case (imc >= 35 && imc < 40):
      return console.log('Situação: Obesidade grau II');
    default:
      null;
  }
};

classifica(imc);
