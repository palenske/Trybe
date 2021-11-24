const toSeparateCep = (cep) => {
  return cep.replace(/(\d{5})(\d{3})/, (_regex, start, end) => `${start}-${end}`);
};

const toNumericCep = (cep) => cep.replace(/-/g, '');

const formatAddress = (addressData) => ({
  ...addressData,
  cep: toSeparateCep(addressData.cep),
});

module.exports = {
  formatAddress,
  toNumericCep
};
