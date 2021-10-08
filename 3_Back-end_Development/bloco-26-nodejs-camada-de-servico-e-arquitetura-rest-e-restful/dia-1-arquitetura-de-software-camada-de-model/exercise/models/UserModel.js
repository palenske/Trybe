const connection = require('./connection');

const createUser = async ({ firstName, lastName, email, password }) => {
  const userObj = { firstName, lastName, email, password };
  
  return connection()
    .then((db) => db.collection('users').insertOne(userObj))
    .then((result) => ({ id: result.insertedId, firstName, lastName, email }));
};

const getUsers = async () => {
  return connection()
    .then((db) => db.collection('users').find().toArray())
    .then((result) => result);
};

module.exports = {
  createUser,
  getUsers,
};
