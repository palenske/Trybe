const ERROR_CODES = {
  notFound: 404,
  invalidData: 400,
  alreadyExists: 409,
  unauthorized: 401,
  badRequest: 400,
  internalError: 500,
  forbidden: 403,
};

module.exports = (err, _req, res, _next) => {
  const { code, message } = err;
  const status = ERROR_CODES[code] || 505;

  return res.status(status).json({ message });
};
