let player = {
    name: 'Marta',
    lastName: "Silva",
    age: 34,
    medals: {golden: 2, silver: 3},
};
console.log('A jogadora ' + player.name , player.lastName + ' tem ' + player.age +' anos de idade\n');

player['fullName'] = player.name +' '+ player.lastName;

console.table('A jogadora '+ player['fullName'] +' tem '+ player.age +' anos de idade\n');

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora Marta Silva foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes\nAno: '+ player['bestInTheWorld'] + '\n'); 

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata\n')

for (let key in player) {
    console.log(key, '=', player[key]);
}