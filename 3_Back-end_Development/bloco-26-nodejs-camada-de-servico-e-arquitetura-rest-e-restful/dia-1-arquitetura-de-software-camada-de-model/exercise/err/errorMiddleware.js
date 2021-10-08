module.exports = (err, _req, res, _next) => {
  if (err.status) {
      return res.status(err.stauts).json({ error: true, message: err.message });
  }

  if (err.isJoi) {
      return res.status(400).json({ error: true, message: err.details[0].message });
  }

  console.error(err);
  res.status(500).json({ message: 'Erro interno do servidor' });
};