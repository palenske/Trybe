const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const server = require('../api/app');
const { MongoClient, ObjectId } = require('mongodb');
const { getConnection } = require('./mock/connectionMock');
chai.use(chaiHttp);
const { expect } = chai;
const { insertMDB, dropMDB, findMDB } = require('./mock/insertAndDrop');
const { userPayload, recipePayload, loginPayload } = require('./mock/payloadMock');

describe('DELETE /recipes/:id', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(() => {
    MongoClient.connect.restore();
  });

  describe('Quando a receita é deletada com sucesso', () => {
    let response;
    let token;
    let existingRecipe;
    const USER_ID = new ObjectId();
    const RECIPE_ID = new ObjectId();

    before(async () => {
      await insertMDB(connectionMock, 'users', { _id: USER_ID, ...userPayload });
      await insertMDB(connectionMock, 'recipes', { _id: RECIPE_ID, ...recipePayload });

      token = await chai.request(server)
        .post('/login')
        .send(loginPayload)
        .then((res) => res.body.token);

      response = await chai.request(server)
        .delete(`/recipes/${RECIPE_ID}`)
        .set('authorization', token)
        .set('user', { userId: USER_ID });
    });

    after(async () => {
      await dropMDB(connectionMock, 'users');
      await dropMDB(connectionMock, 'recipes');
    });

    it('retorna um status 204', () => {
      expect(response).to.have.status(204);
    });

    it('a receita deletada não é encontrada', async () => {
      existingRecipe = await findMDB(connectionMock, 'recipes', { _id: RECIPE_ID });

      expect(existingRecipe).to.be.null;
    })
  });

  describe('Quando tenta um DELETE sem estar logado', () => {
    let response;
    const ID_EXAMPLE = new ObjectId();

    before(async () => {
      await insertMDB(connectionMock, 'recipes', { _id: ID_EXAMPLE, ...recipePayload });

      response = await chai.request(server)
        .delete(`/recipes/${ID_EXAMPLE}`);
    });

    after(async () => {
      await dropMDB(connectionMock, 'recipes');
    });

    it('retorna um status 401', () => {
      expect(response).to.have.status(401);
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('tal objeto possui a propriedade "message"', () => {
      expect(response.body).to.have.property('message');
    });

    it('"message" possui o valor "missing auth token"', () => {
      expect(response.body.message).to.be.equals('missing auth token');
    });
  });
});
