let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log('#1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log()\n');
for (index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
}

console.log('\n#2 - Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado\n');
let total = 0;
for (index = 0; index < numbers.length; index += 1){
    total += numbers[index];
}
console.log('>',total);

console.log('\n#3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array\n');
console.log('>',total/numbers.length);

console.log('\n#4 - Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"\n');
if (total > 20){
    console.log('> valor maior que 20\n');
} else {
    console.log('> valor menor ou igual a 20\n');
}

console.log('\n#5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o\n');
let maior = 0;
for (index = 0; index < numbers.length; index += 1){
    if (numbers[index] >= numbers[(numbers.length-1)-index] && numbers[index] >= maior){
        maior = numbers[index];
    }
}
console.log('>', maior);

console.log('\n#6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"\n');
let impares = 0;
for (index = 0; index < numbers.length; index += 1){
    if ((numbers[index] % 2) != 0){
        impares += 1;
    }
}
if (impares == 0){
    console.log('nenhum valor ímpar encontrado\n');
} else {
    console.log('>', impares);
}

console.log('\n#7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o\n');
let menor = maior;
for (index = 0; index < numbers.length; index += 1){
    if (numbers[index] <= numbers[(numbers.length-1)-index] && numbers[index] <= menor){
        menor = numbers[index];
    }
}
console.log('>', menor);

console.log('\n#8 - Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado\n');
let newArray = [];
for (index = 1; index <= 25; index += 1){
    newArray.push(index);
}
for (index = 0; index < newArray.length; index += 1){
    console.log(newArray[index]);
}
console.log('\n#9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.\n');
for (index = 0; index < newArray.length; index += 1){
    console.log(newArray[index] + '/2 = ' + (newArray[index]/2));
}