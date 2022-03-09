const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/images', express.static(path.join(__dirname, '..', '..', 'public'))); 

app.use('/', routes.login);
app.use('/', routes.register);
app.use('/', routes.products);
app.use('/', routes.user);
app.use('/', routes.sales);
app.use('/', routes.admin);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
