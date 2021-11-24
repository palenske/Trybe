require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cepRoute = require('./routers/cepRoute');
const pong = require('./routers/pongRoute');
const errorReport = require('./err/error');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});

app.use('/ping', pong);
app.use('/cep', cepRoute);
app.use(errorReport);

app.get('/*', (req_, res) => res.status(404).json({ message: 'Not Found :/' }));
