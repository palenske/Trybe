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

