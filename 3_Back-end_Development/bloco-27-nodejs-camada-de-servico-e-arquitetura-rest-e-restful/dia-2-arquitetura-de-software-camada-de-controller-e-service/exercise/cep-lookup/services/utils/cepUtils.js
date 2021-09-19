const formatCep = (cep) => {
  return /\d{5}-\d{3}/.test(cep)
    ? cep
    : cep.replace(/(\d{5})(\d{3})/, (_regex, start, end) => `${start}-${end}`);
};

const getAddress = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: formatCep(cep),
  logradouro,
  bairro,
  localidade,
  uf,
});

module.exports = {
  getAddress,
};