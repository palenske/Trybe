const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const { Address, Employee, Book, User } = require('./models');
const config = require('./config/config');

const app = express();
app.use(bodyParser.json());

const sequelize = new Sequelize(config.development);
// transação

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Deu ruim' });
  };
});

app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({
      where: { id },
      // include: {
      //   model: Address, as: 'addresses',
      //   attributes: { exclude: ['number', 'employeeId', 'employee_id'] }
      // },
    });

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });

    if (req.query.includeAddresses) {
      const addresses = await Address.findAll({ where: { employeeId: id } });
      return res.status(200).json({ employee, addresses });
    }
    return res.status(200).json(employee);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

app.post('/employees', async (req, res) => {
  // const t = await sequelize.transaction();
  
  try {
    const { firstName, lastName, age, city, street, number } = req.body;
    
    // Unmanaged
    // const employee = await Employee.create({ firstName, lastName, age }, { transaction: t });

    // await Address.create({ city, street, number, employeeId: employee.id }, { transaction: t });

    // await t.commit();

    // Managed
    await sequelize.transaction(async (t) => {
      const employee = await Employee.create({ firstName, lastName, age }, { transaction: t });

      await Address.create({ city, street, number, employeeId: employee.id }, { transaction: t });
    });

    // console.log(result);

    return res.status(201).json({ message: 'Cadastrado com sucesso' });
  } catch (error) {
    // Unmanaged
    // await t.rollback();

    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.get('/usersbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] } }],
    });

    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

module.exports = app;