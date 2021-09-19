const statusByCode = {
  notFound: 404,
  invalidData: 400,
}

module.exports = (err, _req, res, _next) => {
  return err.code
  ? res.status(statusByCode[err.code]).json(err)
  : res.status(505).json({ error: { code: 'internal', message: 'Internal server error' } });
};
