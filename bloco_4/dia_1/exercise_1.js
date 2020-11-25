let a=2, b=5;

console.log('-----PROGRAMA_1-----');
console.log('Adição:', a+b);
console.log('Subtração:', a-b);
console.log('Multiplicação:', a*b);
console.log('Divisão:', a/b);
console.log('Módulo:', a%b);
console.log('--------------------');
console.log('\n');
console.log('-----PROGRAMA_2-----');
if (a == b){
    console.log('Números iguais');
} else if (a > b){
    console.log(a, '(a) é maior que (b)', b);
} else {
    console.log(b, '(b) é maior que (a)', a);
}
console.log('--------------------');
console.log('\n');
console.log('-----PROGRAMA_3-----');
a = 2, b = 1; 
let c = 10;
if (a == b || a == c || b == c){
    console.log('possui números iguais\nA, B, C =', a, b, c);
} else if (a > b && b > c){
    console.log('O maior número é o:', a, '(a)');
} else if (b > a && b > c){
    console.log('O maior número é o:', b, '(b)');
} else {
    console.log('O maior número é o', c, '(c)');
}
console.log('--------------------');
console.log('\n');
console.log('-----PROGRAMA_4-----');