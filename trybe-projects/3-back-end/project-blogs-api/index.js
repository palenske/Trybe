const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const error = require('./err/errors');

const app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.get('/', (request, response) => {
  response.send();
});

app.use('/user', routes.user);
app.use('/login', routes.login);
app.use('/categories', routes.category);
app.use('/post', routes.post);
app.use(error);
