const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const server = require('../api/app');
const { MongoClient } = require('mongodb');
const { getConnection } = require('./mock/connectionMock');
chai.use(chaiHttp);
const { expect } = chai;
const { insertMDB, dropMDB } = require('./mock/insertAndDrop');
const { userPayload, loginPayload } = require('./mock/payloadMock');

describe('POST /login', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(() => {
    MongoClient.connect.restore();
  });

  describe('Quando os campos "email" e "senha" estão vazios', () => {
    let response;

    before(async () => {
      response = await chai.request(server)
        .post('/login')
        .send({});
    });

    it('retorna código de status "401"', () => {
      expect(response).to.have.status(401);
    });

    it('retorna um objeto no body', () => {
      expect(response.body).to.be.a('object');
    });

    it('tal objeto possui a propriedade "message"', () => {
      expect(response.body).to.have.property('message');
    });

    it('a propriedade "message" possui o valor "All fields must be filled"', () => {
      expect(response.body.message).to.be.equals('All fields must be filled');
    });

  });

  describe('Quando o usuário não existe ou a senha é inválida', () => {
    let response;

    before(async () => {
      response = await chai.request(server)
        .post('/login')
        .send(loginPayload);
    });

    it('retorna código de status 401', () => {
      expect(response).to.have.status(401);
    });

    it('retorna um objeto no body', () => {
      expect(response.body).to.be.a('object');
    });

    it('o objeto possui a propriedade "message"', () => {
      expect(response.body).to.have.property('message');
    });

    it('a propriedade "message" possui o valor "Incorrect username or password"', () => {
      expect(response.body.message).to.be.equals('Incorrect username or password');
    });
  });


  describe('Quando logado com sucesso', () => {
    let response;

    before(async () => {
      await insertMDB(connectionMock, 'users', { ...userPayload });

      response = await chai.request(server)
        .post('/login')
        .send(loginPayload);
    });

    after(async () => {
      await dropMDB(connectionMock, 'users');
    })

    it('Retorna um status 200', () => {
      expect(response).to.have.status(200);
    });

    it('Retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('O objeto contém um token', () => {
      expect(response.body).to.have.property('token');
    })
  });
});
