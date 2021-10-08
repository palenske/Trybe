const express = require('express');
const bodyParser = require('body-parser');
const createUser = require('./middlewares/UserMiddleware');
const error = require('./err/errorMiddleware');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.listen(PORT, () => { console.log(`Online na porta ${PORT}`); });

app.post('/user', createUser);

app.use(error);