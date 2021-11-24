const MongoConnection = require('../../connections/mongoConnection');

const create = async (newRecipe) => {
  try {
    const { ops: [result] } = await MongoConnection.connection()
      .then((db) => db.collection('recipes').insertOne(newRecipe));

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getRecipes = async () => {
  try {
    const result = await MongoConnection.connection()
      .then((db) => db.collection('recipes').find().toArray());

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getById = async (id) => {
  try {
    const result = await MongoConnection.connection()
      .then((db) => db.collection('recipes').findOne({ _id: id }));

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const update = async (id, payload) => {
  try {
    const { value: { email, role, ...rest } } = await MongoConnection.connection()
      .then((db) => db.collection('recipes').findOneAndUpdate(
        { _id: id }, { $set: { ...payload } }, { returnOriginal: false },
      ));

    return rest;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const exclude = async (id) => {
  try {
    const result = await MongoConnection.connection()
      .then((db) => db.collection('recipes').deleteOne({ _id: id }));

    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

module.exports = {
  create,
  getRecipes,
  getById,
  update,
  exclude,
};
