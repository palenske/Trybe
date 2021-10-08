const connection = require('./connection');

const createUser = ({ firstName, lastName, email, password }) => {
  const userObj = { firstName, lastName, email, password };
  
  return connection()
    .then((db) => db.collection('users').insertOne(userObj))
    .then((result) => ({ id: result.insertedId, firstName, lastName, email }));
};

module.exports = {
  createUser,
};
