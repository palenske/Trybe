"use strict";
exports.__esModule = true;
var Exercise = require("./exercises");
console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log("A soma do array \u00E9 igual a ".concat(Exercise.sumArray([3, 6, 9])));
console.log("Tri\u00E2ngulo de base 10cm e altura 25cm: ".concat(Exercise.triangle(10, 25), "cm\u00B2"));
console.log("Tri\u00E2ngulo de base 100cm e altura 200cm: ".concat(Exercise.triangle(100, 200), "cm\u00B2"));
console.log("Quadrado de lado 10cm: ".concat(Exercise.square(10), "cm\u00B2"));
console.log("Quadrado de lado 100cm: ".concat(Exercise.square(100), "cm\u00B2"));
console.log("Ret\u00E2ngulo de base 10cm e altura 25cm: ".concat(Exercise.rectangle(10, 25), "cm\u00B2"));
console.log("Ret\u00E2ngulo de base 100cm e altura 200cm: ".concat(Exercise.rectangle(100, 200), "cm\u00B2"));
console.log("Fatorial de 5: ".concat(Exercise.fatorial(5)));
console.log("Losango com diagonal maior 32cm e diagonal menor 18cm: ".concat(Exercise.lozenge(32, 18)));
console.log("Losango com diagonal maior 75cm e diagonal menor 25cm: ".concat(Exercise.lozenge(75, 25)));
console.log("Trap\u00E9zio com base maior 100cm, base menor 70cm e altura de 50cm: ".concat(Exercise.trapeze(100, 70, 50)));
console.log("Trap\u00E9zio com base maior 150cm, base menor 120cm e altura de 80cm: ".concat(Exercise.trapeze(150, 120, 80)));
console.log("C\u00EDrculo com raio de 25cm: ".concat(Exercise.circle(25)));
console.log("C\u00EDrculo com raio de 12,5cm: ".concat(Exercise.circle(12.5)));
