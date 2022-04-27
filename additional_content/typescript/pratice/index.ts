import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(100, 200)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(100)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(100, 200)}cm²`);

console.log(`Fatorial de 5: ${Exercise.fatorial(5)}`)

console.log(`Losango com diagonal maior 32cm e diagonal menor 18cm: ${Exercise.lozenge(32, 18)}`)
console.log(`Losango com diagonal maior 75cm e diagonal menor 25cm: ${Exercise.lozenge(75, 25)}`)

console.log(`Trapézio com base maior 100cm, base menor 70cm e altura de 50cm: ${Exercise.trapeze(100, 70, 50)}`)
console.log(`Trapézio com base maior 150cm, base menor 120cm e altura de 80cm: ${Exercise.trapeze(150, 120, 80)}`)

console.log(`Círculo com raio de 25cm: ${Exercise.circle(25)}`);
console.log(`Círculo com raio de 12,5cm: ${Exercise.circle(12.5)}`);