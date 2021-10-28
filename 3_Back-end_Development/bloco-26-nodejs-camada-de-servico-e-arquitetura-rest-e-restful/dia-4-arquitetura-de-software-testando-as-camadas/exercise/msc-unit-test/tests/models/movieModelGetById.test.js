const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoConnection = require('../../models/connection');
// const MoviesModel = require('../../models/movieModel');

const MoviesModel = {
  getById: () => {}
};

describe('busca filme por ID', () => {
  let connectionMock;
  const DBServer = new MongoMemoryServer();
  
  before(async () => {
    const URLMock = new DBServer.getUri();
    connectionMock = await MongoClient.connect(URLMock, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('model_example'));

    sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
  });

  after(() => mongoConnection.getConnection.restore());

  describe('Quando o filme não é encontrado', () => {
    it('retorna um array', async () => {
      const movie = await MoviesModel.getById();

      expect(movie).to.be.an('array');
    });

    it('é um array vazio', async () => {
      const movie = await MoviesModel.getById();

      expect(movie).to.be.empty;
    });
  });
});