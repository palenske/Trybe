require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller/cepController');
const errorReport = require('./err/error');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});

app.use(bodyParser.json());

app.get('/ping', (req_, res) => res.status(200).json({ message: 'pong!' }));
app.get('/cep/:cep', controller.findByCep);
app.post('/cep', controller.createAddress);
app.get('/*', (req_, res) => res.status(404).json({ message: 'Not Found ):' }));

app.use(errorReport);

