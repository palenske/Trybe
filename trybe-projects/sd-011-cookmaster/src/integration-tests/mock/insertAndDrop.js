const insertMDB = async (connectionMock, collection, payload) => await connectionMock
  .db('Cookmaster')
  .collection(collection)
  .insertOne(payload);

const dropMDB = async (connectionMock, collection) => await connectionMock
  .db('Cookmaster')
  .collection(collection)
  .drop();

  const findMDB = async (connectionMock, collection, payload) => await connectionMock
  .db('Cookmaster')
  .collection(collection)
  .findOne(payload);

module.exports = {
  insertMDB,
  dropMDB,
  findMDB,
};