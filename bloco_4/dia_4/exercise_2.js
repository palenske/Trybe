console.log ('\n# 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.');
function isPali(str){
    let paliTeste = '';
    for (let index = str.length; index > 0; index -= 1){
        paliTeste += str[index-1];
    }
    if (paliTeste === str){
        return true;
    } else {
        return false;
    }
}
console.log(isPali('dog'));
console.log(isPali('ovo'));
console.log(isPali('ave'));
console.log(isPali('arara'));
console.log(isPali('desenvolvimento'));
console.log(isPali('reviver'));

console.log ('\n# 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.');

function maiorId(numbers){
    let maior = 0, id = 0;
    for (index = 0; index < numbers.length; index += 1){
        if (numbers[index] >= numbers[(numbers.length-1)-index] && numbers[index] >= maior){
            maior = numbers[index];
            id = index;
        }
    }
    return id;
}
console.log(maiorId([2, 3, 6, 7, 10, 1]));

