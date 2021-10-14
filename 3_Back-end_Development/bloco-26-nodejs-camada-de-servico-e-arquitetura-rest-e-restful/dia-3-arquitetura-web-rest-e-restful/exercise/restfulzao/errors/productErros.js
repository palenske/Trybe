const ERROR_CODES = {
  badRequest: 400,
  invalidData: 400,
  notFound: 404,
  alreadyExists: 409,
  notDefined: 500,
};

module.exports = function (error, _req, res, _next) {
  const status = ERROR_CODES[error.code] || ERROR_CODES.notDefined;

  return res.status(status).json({ error: true, message: error.message });
}