const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// exercício 1
const addkey = (obj, key, value) => {
  obj[key] = value;
  console.log(lesson2);
}

addkey(lesson2, 'turno', 'manhã');

// exercício 2
const listKeys = obj => Object.keys(obj);
  console.log(listKeys(lesson1));

// exercício 3
const size = obj => Object.keys(obj).length;
  console.log(size(lesson1));

// exercício 4
const listValues = obj => Object.values(obj);
  console.log(listValues(lesson1));

// exercicio 5
const allLessons = Object.assign({lesson1, lesson2, lesson3});
console.log(allLessons);

// exercício 6
const totalStudants = obj => {
  let numberOfStudents = 0;
  for (let i in obj) {
    numberOfStudents += obj[i].numeroEstudantes;
  }
  return numberOfStudents;
}
console.log(`Total de estudantes: ${totalStudants(allLessons)}`);

// exercício 7
const valueByNumber = (obj, num) => Object.values(obj)[num];
console.log(valueByNumber(lesson1, 0));

// exercício 8
const verifyPair = (obj, key, value) => {
  
}