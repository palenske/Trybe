const formatToSeparateCep = (cep) => {
  return cep.replace(/(\d{5})(\d{3})/, (_regex, start, end) => `${start}-${end}`);
};

const formatToNumericCep = (cep) => cep.replace(/-/g, '');

const formatAddress = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: formatToSeparateCep(cep),
  logradouro,
  bairro,
  localidade,
  uf,
});

module.exports = {
  formatAddress,
  formatToNumericCep
};
