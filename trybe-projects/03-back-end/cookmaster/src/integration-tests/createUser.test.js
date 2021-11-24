const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const server = require('../api/app');
const { MongoClient } = require('mongodb');
const { getConnection } = require('./mock/connectionMock');
chai.use(chaiHttp);
const { expect } = chai;
const { insertMDB, dropMDB } = require('./mock/insertAndDrop');
const { userPayload } = require('./mock/payloadMock');

describe('POST /users', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(() => {
    MongoClient.connect.restore();
  });

  describe('Quando o email já está cadastrado', () => {
    let response;

    before(async () => {
      await insertMDB(connectionMock, 'users', { ...userPayload });

      response = await chai.request(server)
        .post('/users')
        .send(userPayload);
    });

    after(async () => {
      await dropMDB(connectionMock, 'users');
    });

    it('retorna um status 409', () => {
      expect(response).to.have.status(409);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('tal objeto possui a propriedade "message"', () => {
      expect(response.body).to.have.property('message');
    });

    it('"Message" possui o valor "Email already registered"', () => {
      expect(response.body.message).to.be.equals('Email already registered');
    });
  });

  describe('Quando é criado com sucesso', () => {
    let response;

    before(async () => {
      response = await chai.request(server)
        .post('/users')
        .send(userPayload);
    });

    after(async () => {
      await dropMDB(connectionMock, 'users');
    });

    it('retorna um status 201', () => {
      expect(response).to.have.status(201);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('tal objeto possui a propriedade "user"', () => {
      expect(response.body).to.have.property('user');
    });

    it('"user" contém "_id", "name", "role" e "email" do usuário cadastrado', () => {
      expect(response.body.user).to.have.keys('_id', 'name', 'email', 'role');
    });
  });
});
