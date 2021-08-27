function numberReturns(n1, n2, n3) {
  return new Promise((resolve, reject) => {
    isNaN(n1 + n2 + n3)
    ? reject(Error("Informe apenas números"))
    : (n1 + n2) * n3 < 50
    ? reject(Error("Valor muito baixo"))
    : resolve(((n1 + n2) * n3));
  });
}

async function callFunc() {
  const setRandNum = [...new Array(3)].map(() => Math.floor(Math.random() * 100 + 1));
  try {
    const result = await numberReturns(...setRandNum);
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}

callFunc();