const express = require('express');
const bodyParser = require('body-parser');
const UserMiddleware = require('./middlewares/UserMiddleware');
const error = require('./err/errorMiddleware');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.listen(PORT, () => { console.log(`Online na porta ${PORT}`); });

app.post('/user', UserMiddleware.createUser);
app.get('/user', UserMiddleware.getUsers);
app.get('/user/:id', UserMiddleware.getById);
app.put('/user/:id', UserMiddleware.updateUser);


app.use(error);