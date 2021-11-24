const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const server = require('../api/app');
const { MongoClient } = require('mongodb');
const { getConnection } = require('./mock/connectionMock');
chai.use(chaiHttp);
const { expect } = chai;
const { insertMDB, dropMDB } = require('./mock/insertAndDrop');
const { userPayload, recipePayload, loginPayload } = require('./mock/payloadMock');

describe('GET /recipes', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(() => {
    MongoClient.connect.restore();
  });

  describe('Quando não há receitas cadastradas', () => {
    let response;
    let token;

    before(async () => {
      await insertMDB(connectionMock, 'users', { ...userPayload });

      token = await chai.request(server)
        .post('/login')
        .send(loginPayload)
        .then((res) => res.body.token);

      response = await chai.request(server)
        .get('/recipes')
        .set('authorization', token);
    });

    after(async () => {
      await dropMDB(connectionMock, 'users');
    });

    it('retorna um status 200', () => {
      expect(response).to.have.status(200);
    });

    it('retorna um array', () => {
      expect(response.body).to.be.an('array');
    });

    it('o array está vazio', () => {
      expect(response.body).to.be.empty;
    });
  });

  describe('Quando as receitas são buscadas com sucesso', () => {
    let response;
    let token;

    before(async () => {
      await insertMDB(connectionMock, 'users', { ...userPayload });
      await insertMDB(connectionMock, 'recipes', { ...recipePayload });

      token = await chai.request(server)
        .post('/login')
        .send(loginPayload)
        .then((res) => res.body.token);

      response = await chai.request(server)
        .get('/recipes')
        .set('authorization', token);
    });

    after(async () => {
      await dropMDB(connectionMock, 'users');
      await dropMDB(connectionMock, 'recipes');
    });

    it('retorna um status 200', () => {
      expect(response).to.have.status(200);
    });

    it('retorna um array', () => {
      expect(response.body).to.be.an('array');
    });

    it('tal array é composto por objetos', () => {
      expect(response.body[0]).to.be.a('object');
    });
  });

  describe('Quando busca as receitas sem estar logado', () => {
    let response;

    before(async () => {
      await insertMDB(connectionMock, 'recipes', { ...recipePayload });

      response = await chai.request(server)
        .get('/recipes');
    });

    after(async () => {
      await dropMDB(connectionMock, 'recipes');
    });

    it('retorna um status 200', () => {
      expect(response).to.have.status(200);
    });

    it('retorna um array', () => {
      expect(response.body).to.be.an('array');
    });

    it('tal array é composto por objetos', () => {
      expect(response.body[0]).to.be.a('object');
    });
  });
});
