const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const server = require('../api/app');
const { MongoClient, ObjectId } = require('mongodb');
const { getConnection } = require('./mock/connectionMock');
chai.use(chaiHttp);
const { expect } = chai;
const { insertMDB, dropMDB } = require('./mock/insertAndDrop');
const { userPayload, recipePayload, loginPayload } = require('./mock/payloadMock');

describe('GET /recipes/:id', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(() => {
    MongoClient.connect.restore();
  });

  describe('Quando a receita não é encontrada', () => {
    let response;
    let token;
    const ID_EXAMPLE = new ObjectId();

    before(async () => {
      await insertMDB(connectionMock, 'users', { ...userPayload });

      token = await chai.request(server)
        .post('/login')
        .send(loginPayload)
        .then((res) => res.body.token);

      response = await chai.request(server)
        .get(`/recipes/${ID_EXAMPLE}`)
        .set('authorization', token);
    });

    after(async () => {
      await dropMDB(connectionMock, 'users');
    });

    it('retorna um status 404', () => {
      expect(response).to.have.status(404);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('tal objeto possui a propriedade "message"', () => {
      expect(response.body).to.have.property('message');
    });

    it('"message" possui um valor igual a "recipe not found"', () => {
      expect(response.body.message).to.be.equals('recipe not found');
    })
  });

  describe('Quando a receita é encontrada com sucesso', () => {
    let response;
    let token;
    const ID_EXAMPLE = new ObjectId();

    before(async () => {
      await insertMDB(connectionMock, 'users', { ...userPayload });
      await insertMDB(connectionMock, 'recipes', { _id: ID_EXAMPLE, ...recipePayload });

      token = await chai.request(server)
        .post('/login')
        .send(loginPayload)
        .then((res) => res.body.token);

      response = await chai.request(server)
        .get(`/recipes/${ID_EXAMPLE}`)
        .set('authorization', token);
    });

    after(async () => {
      await dropMDB(connectionMock, 'users');
      await dropMDB(connectionMock, 'recipes');
    });

    it('retorna um status 200', () => {
      expect(response).to.have.status(200);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('tal objeto possui um "_id" com o valor igual ao da requisição', () => {
      expect(response.body._id).to.be.equals(ID_EXAMPLE.toString());
    })
  });

  describe('Quando busca uma receita válida sem estar logado', () => {
    let response;
    const ID_EXAMPLE = new ObjectId();

    before(async () => {
      await insertMDB(connectionMock, 'recipes', { _id: ID_EXAMPLE, ...recipePayload });

      response = await chai.request(server)
        .get(`/recipes/${ID_EXAMPLE}`);
    });

    after(async () => {
      await dropMDB(connectionMock, 'recipes');
    });

    it('retorna um status 200', () => {
      expect(response).to.have.status(200);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('tal objeto possui um "_id" com o valor igual ao da requisição', () => {
      expect(response.body._id).to.be.equals(ID_EXAMPLE.toString());
    })
  });
});
