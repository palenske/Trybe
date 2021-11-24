module.exports = pongRoute = require('express').Router();

pongRoute.route('/')
  .get((req_, res) => res.status(200).json({ message: 'pong!' }));
