// Exercise_1
const factorial = num => num === 0 || num === 1 ? 1 : num * factorial(num - 1);
console.log(factorial(4));

// Exercise_2
const highWord = phrase => phrase.split(' ').sort((a, b) => b.length - a.length)[0];
console.log(highWord('Antonio foi no banheiro e não sabemos o que aconteceu'));


// // Exercise_3
// const listenerBtn = document.getElementById('button');
// const clicks = document.getElementById('clicks');
// let clickCount = 0;
// listenerBtn.addEventListener('click', () => clicks.innerText = clickCount += 1);

// Exercise_4
const mySkills = ['JavaScript', 'HTML', 'CSS'];
const changeX = word => `Tryber ${word} aqui!`;

console.log(changeX('Vini'));