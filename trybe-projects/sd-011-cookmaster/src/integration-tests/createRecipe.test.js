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

describe('POST /recipes', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(() => {
    MongoClient.connect.restore();
  });

  describe('Quando não envia um token no headers', () => {
    let response;

    before(async () => {
      response = await chai.request(server)
        .post('/recipes')
        .send({});
    });

    it('retorna um status "401"', () => {
      expect(response).to.have.status(401);
    });

    it('retorna um objeto no body', () => {
      expect(response.body).to.be.a('object');
    });

    it('tal objeto possui a propriedade "message"', () => {
      expect(response.body).to.have.property('message');
    });

    it('a propriedade "message" possui o valor "missing auth token"', () => {
      expect(response.body.message).to.be.equals('missing auth token');
    });
  });

  describe('Quando o token enviado é inválido', () => {
    let response;
    let token = 'invalid';

    before(async () => {
      response = await chai.request(server)
        .post('/recipes')
        .set('authorization', token);
    });

    it('retorna um status "401"', () => {
      expect(response).to.have.status(401);
    });

    it('retorna um objeto no body', () => {
      expect(response.body).to.be.a('object');
    });

    it('tal objeto possui a propriedade "message"', () => {
      expect(response.body).to.have.property('message');
    });

    it('a propriedade message possui o valor "jwt malformed"', () => {
      expect(response.body.message).to.be.equals('jwt malformed');
    });
  });

  describe('Quando os campos estão vazios', () => {
    let response;
    let token;

    before(async () => {
      await insertMDB(connectionMock, 'users', { ...userPayload });

      token = await chai.request(server)
        .post('/login')
        .send(loginPayload)
        .then((res) => res.body.token);

      response = await chai.request(server)
        .post('/recipes')
        .set('authorization', token)
        .send({});
    });

    after(async () => {
      await dropMDB(connectionMock, 'users');
    });

    it('retorna um status "400"', () => {
      expect(response).to.have.status(400);
    });

    it('retorna um objeto no body', () => {
      expect(response.body).to.be.a('object');
    });

    it('tal objeto possui a propriedade "message"', () => {
      expect(response.body).to.have.property('message');
    });

    it('a propriedade "message" possui o valor "Invalid entries. Try again."', () => {
      expect(response.body.message).to.be.equals('Invalid entries. Try again.');
    });
  });

  describe('Quando é criado com sucesso', () => {
    let response;
    let token;

    before(async () => {
      await insertMDB(connectionMock, 'users', { ...userPayload });

      token = await chai.request(server)
        .post('/login')
        .send(loginPayload)
        .then((res) => res.body.token);

      response = await chai.request(server)
        .post('/recipes')
        .set('authorization', token)
        .send(recipePayload);
    });

    after(async () => {
      await dropMDB(connectionMock, 'users');
      await dropMDB(connectionMock, 'recipes');
    });

    it('retorna um status 201', () => {
      expect(response).to.have.status(201);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('tal objeto possui a propriedade "recipe"', () => {
      expect(response.body).to.have.property('recipe');
    });

    it('"recipe" contém "_id", "name", "ingredients", "preparation" e "userId"', () => {
      expect(response.body.recipe).to.have
        .keys('_id', 'name', 'ingredients', 'preparation', 'userId');
    });
  });
});
