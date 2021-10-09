const statusByCode = {
  notFound: 404,
  invalidData: 400,
  alreadyExists: 409,
};

module.exports = (err, _req, res, _next) => {
  switch (true) {
    case err.isJoi:
      return res.status(400).json({ error: { message: err.details[0].message } });
    case err.hasOwnProperty('code'):
      return res.status(statusByCode[err.code]).json(err);
    default:
      console.log('default');
      return res.status(505)
        .json({ error: { code: 'internal', message: 'Internal server error' } });
  };
};
