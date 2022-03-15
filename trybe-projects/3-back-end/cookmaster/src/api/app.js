require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/usersRouter');
const loginRoutes = require('./routes/loginRouter');
const recipesRoutes = require('./routes/recipesRouter');
const error = require('../err/errors');

const app = express();
app.use(bodyParser.json());

app.get('/', (_request, response) => response.send());

app.use('/users', usersRoutes);
app.use('/login', loginRoutes);
app.use('/recipes', recipesRoutes);
app.use('/images', express.static(`${__dirname}/../uploads`));
app.use(error);
app.get('/*', (_req, res) => res.status(404).json({ message: 'Page Not Found' }));

module.exports = app;
