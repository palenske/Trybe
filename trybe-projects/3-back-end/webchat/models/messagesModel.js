const MongoConnection = require('./connection');

const saveMsg = async (messageData) => {
  const db = await MongoConnection();
  const messages = await db.collection('messages').insertOne(messageData);

  return messages;
};

const showMsg = async () => {
  const db = await MongoConnection();
  const messages = await db.collection('messages').find().toArray();

  return messages;
};

module.exports = {
  saveMsg,
  showMsg,
};
