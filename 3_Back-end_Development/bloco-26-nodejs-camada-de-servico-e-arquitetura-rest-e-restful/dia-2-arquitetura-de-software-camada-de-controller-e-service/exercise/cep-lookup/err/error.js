const statusByCode = {
  notFound: 404,
  invalidData: 400,
  alreadyExists: 409,
};

module.exports = (err, _req, res, _next) => {
  switch (true) {
    case err.code && true:
      console.log('entrou aqui');
      return res.status(statusByCode[err.code]).json(err);
    case err.isJoi:
      console.log('caiu aqui');
      return res.status(400).json({ error: { message: err.details[0].message } });
    default:
      console.log('default');
      return res.status(505).json({ error: { code: 'internal', message: 'Internal server error' } });
  };
};
