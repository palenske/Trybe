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

console.log ('\n# 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.');
function menorId(numbers){
    let menor = 0, id = 0;
    for (index = 0; index < numbers.length; index += 1){
        if (numbers[index] <= numbers[(numbers.length-1)-index] && numbers[index] <= menor){
            menor = numbers[index];
            id = index;
        }
    }
    return id;
}
console.log(menorId([2, 4, 6, 7, 10, 0, -3]));

console.log ('\n# 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.');

function maiorArray(arrayNomes){
    let name = '', name2 = '', maiorA = '';
    for(index = 0; index < arrayNomes.length; index += 1){
        name = arrayNomes[index];
        name2 = arrayNomes[(arrayNomes.length-1)-index];
        if(name.length >= name2.length && name.length >= maiorA.length){
            maiorA = arrayNomes[index];
        }
    }
    return maiorA;
}

console.log(maiorArray(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));