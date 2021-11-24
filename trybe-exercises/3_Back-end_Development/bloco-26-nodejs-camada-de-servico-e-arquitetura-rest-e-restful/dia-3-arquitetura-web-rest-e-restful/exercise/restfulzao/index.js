require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const productsRouter = require('./routers/productRouters');
const errors = require('./errors/productErros');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', productsRouter);
app.use(errors);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});