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
  const userId = new ObjectId(id);

  const user = await connection().then((db) => db.collection('users').findOne(userId));

  return user
    ? formater(user)
    : null;
};

const updateUser = async (id, userData) => {
  if (!ObjectId.isValid(id)) return null;
  const userId = new ObjectId(id);

  const updatedUser = await connection()
    .then((db) => db.collection('users')
      .findOneAndUpdate({ _id: userId }, { $set: userData }, { returnOriginal: false }))
    .then((result) => result.value);

  return updatedUser
    ? formater({userId, ...userData})
    : null;
};

module.exports = {
  createUser,
  updateUser,
  getUsers,
  getById,
};
