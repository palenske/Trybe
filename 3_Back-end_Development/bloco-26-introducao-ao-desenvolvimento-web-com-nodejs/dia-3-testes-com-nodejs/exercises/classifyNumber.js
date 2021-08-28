module.exports = (num) => {
  switch (true) {
    case isNaN(num):
      return "O parâmetro precisa ser um número"
    case num > 0:
      return "positivo"
    case num < 0:
      return "negativo"
    default:
      return "neutro"
  }
};
