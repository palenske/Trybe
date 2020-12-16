let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };
//1
console.log('Bem-vinda', info.personagem);
console.log('\n');
//2
info['recorrente'] = 'Sim';
//3
for (let key in info){
    console.log(info[key]);
}
console.log('\n');
//4
for (let key in info){
console.log(key);
}
console.log('\n');
//5
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

function imprime(a, b){
    for (let key in a, b){
        if (info[key] === b[key]){
            console.log('Ambos recorrentes');
        } else {
            console.log(a[key], ' e ', b[key]);
        }
    }

}
imprime(info, info2);