module.exports = (num) => {
  switch (true) {
    case num > 0:
      return "positivo"
    case num < 0:
      return "negativo"
    default:
      return "neutro"
  }
};
