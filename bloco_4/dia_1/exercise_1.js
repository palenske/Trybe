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
a = 0, b = 6; 
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
if (a > 0){
    console.log('positive\n',a);
} else if (a < 0){
    console.log('negative\n',a);
} else {
    console.log('zero\n',a);
}
console.log('--------------------');
console.log('\n');
console.log('-----PROGRAMA_5-----');
a = 80, b = 50, c = 50;
console.log('Ângulo A:', a);
console.log('Ângulo B:', b);
console.log('Ângulo C:', c);
if (a+b+c == 180){
    Boolean = true;
} else {
    Boolean = false;
}
console.log(Boolean);

console.log('--------------------');
console.log('\n');
console.log('-----PROGRAMA_6-----');