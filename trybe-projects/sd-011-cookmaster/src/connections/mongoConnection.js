const { MongoClient } = require('mongodb');

const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/Cookmaster`;
const DB_NAME = 'Cookmaster';

let db = null;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connection = () => (db
  ? Promise.resolve(db)
  : MongoClient.connect(MONGO_DB_URL, OPTIONS).then((conn) => {
    db = conn.db(DB_NAME);
    return db;
  }));

module.exports = { connection };
