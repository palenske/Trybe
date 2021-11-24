const MongoConnection = require('../../connections/mongoConnection');

const create = async (newUser) => {
  try {
    const users = await MongoConnection.connection()
      .then((db) => db.collection('users'));

    const { ops } = await users.insertOne(newUser);
    delete ops[0].password;

    return { user: ops[0] };
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getUser = async (email) => {
  try {
    const users = await MongoConnection.connection()
      .then((db) => db.collection('users'));

    const user = await users.findOne({ email });

    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = {
  create,
  getUser,
};
