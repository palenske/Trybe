// Exercise_1
const factorial = num => num === 0 || num === 1 ? num : num * factorial (num -1);
console.log(factorial(4));

// Exercise_2
const highWord = phrase =>  phrase.split(' ').sort((a, b) => b.length - a.length)[0];
console.log(highWord('Antonio foi no banheiro e não sabemos o que aconteceu'));
