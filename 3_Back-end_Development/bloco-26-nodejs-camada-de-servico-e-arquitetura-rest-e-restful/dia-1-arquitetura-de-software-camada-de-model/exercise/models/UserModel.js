const connection = require('./connection');
const { ObjectId } = require('mongodb');

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

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const mongoId = new ObjectId(id);

  const user = await connection()
    .then((db) => db.collection('users').findOne(mongoId));
  
  return user
  ? user
  : null;
}

module.exports = {
  createUser,
  getUsers,
  getById,
};
