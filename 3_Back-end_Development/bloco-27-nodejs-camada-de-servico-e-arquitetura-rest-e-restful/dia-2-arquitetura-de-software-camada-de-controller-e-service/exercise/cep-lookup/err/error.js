const { exist } = require("joi");

const statusByCode = {
  notFound: 404,
  invalidData: 400,
  alreadyExists: 409,
}

module.exports = (err, _req, res, _next) => {
  // switch (true) {
  //   case err.isJoi:
  //     return res.status(400).json({ error: { message: err.details[0].message } });
  //   case err.code:
  //     return res.status(statusByCode[err.code]).json(err);
  //   default:
  //     return res.status(505).json({ error: { code: 'internal', message: 'Internal server error' } });
  // } por que não funfaaaa? ;(

  if (err.isJoi) return res.status(400).json({ error: { message: err.details[0].message } });
  if (err.code) return res.status(statusByCode[err.code]).json(err);
  res.status(505).json({ error: { code: 'internal', message: 'Internal server error' } });
};
