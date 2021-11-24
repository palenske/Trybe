const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const DBserver = new MongoMemoryServer();
const OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };

const getConnection = async () => {
  const URLMock = await DBserver.getUri();
  return MongoClient.connect(URLMock, OPTIONS);
};

module.exports = { getConnection };
