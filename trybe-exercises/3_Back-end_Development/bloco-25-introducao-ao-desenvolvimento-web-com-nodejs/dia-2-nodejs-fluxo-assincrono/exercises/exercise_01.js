function numberReturns(n1, n2, n3) {
  return new Promise((resolve, reject) => {
    isNaN(n1 + n2 + n3)
    ? reject(Error("Informe apenas números"))
    : (n1 + n2) * n3 < 50
    ? reject(Error("Valor muito baixo"))
    : resolve(((n1 + n2) * n3));
  });
}

numberReturns(1, 2, 3) // modificar aqui
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));
