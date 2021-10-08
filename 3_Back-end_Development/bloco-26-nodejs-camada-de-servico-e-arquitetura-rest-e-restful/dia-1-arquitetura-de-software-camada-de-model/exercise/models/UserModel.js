const connection = require('./connection');
const { ObjectId } = require('mongodb');


const formater = ({ _id, password, ...user }) => {
  return {
    id: _id,
    ...user,
  }
};

const createUser = async ({ firstName, lastName, email, password }) => {
  const userObj = { firstName, lastName, email, password };
  
  return connection()
    .then((db) => db.collection('users').insertOne(userObj))
    .then((result) => ({ id: result.insertedId, firstName, lastName, email }));
};

const getUsers = async () => {
  return connection()
    .then((db) => db.collection('users').find().toArray())
    .then((result) => result.map((user) => formater(user)));
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const mongoId = new ObjectId(id);

  const user = await connection()
    .then((db) => db.collection('users').findOne(mongoId));
  
  return user
  ? formater(user)
  : null;
}

module.exports = {
  createUser,
  getUsers,
  getById,
};
