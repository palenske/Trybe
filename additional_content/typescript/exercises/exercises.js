"use strict";
exports.__esModule = true;
exports.circle = exports.trapeze = exports.lozenge = exports.rectangle = exports.square = exports.triangle = exports.fatorial = exports.mult = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return "Ol\u00E1 ".concat(name, "!");
}
exports.greeter = greeter;
function personAge(name, age) {
    return "".concat(name, " tem ").concat(age, " anos!");
}
exports.personAge = personAge;
function add(x, y) {
    return x + y;
}
exports.add = add;
var sumArray = function (numbers) { return numbers.reduce(add, 0); };
exports.sumArray = sumArray;
function mult(x, y) {
    return x * y;
}
exports.mult = mult;
var fatorial = function (number) { return Array
    .from({ length: number }, function (_, i) { return ++i; }).reduce(mult); };
exports.fatorial = fatorial;
function triangle(base, heigth) {
    return (base * heigth) / 2;
}
exports.triangle = triangle;
function square(side) {
    return Math.pow(side, 2);
}
exports.square = square;
function rectangle(base, heigth) {
    return base * heigth;
}
exports.rectangle = rectangle;
function lozenge(largerDiagonal, lessDiagonal) {
    return (largerDiagonal * lessDiagonal) / 2;
}
exports.lozenge = lozenge;
function trapeze(largerBase, lessBase, heigth) {
    return ((largerBase + lessBase) * heigth) / 2;
}
exports.trapeze = trapeze;
function circle(raio) {
    var PI = 3.14;
    return PI * (Math.pow(raio, 2));
}
exports.circle = circle;
