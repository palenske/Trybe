require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const Cep = require('./controller/cep');
const errorReport = require('./err/error');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/ping', (req_, res) => res.status(200).json({ message: 'pong!' }));

app.get('/cep/:cep', Cep.findByCep);

app.post('/cep', Cep.createAddress);

app.use(errorReport);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
