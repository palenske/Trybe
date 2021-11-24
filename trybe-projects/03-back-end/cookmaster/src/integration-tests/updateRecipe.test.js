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

describe('PUT /recipes/:id', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(() => {
    MongoClient.connect.restore();
  });

  describe('Quando a receita é atualizada com sucesso', () => {
    let response;
    let token;
    const USER_ID = new ObjectId();
    const RECIPE_ID = new ObjectId();
    const changedRecipe = {
      name: 'changed',
      ingredients: 'changed',
      preparation: 'changed',
    };

    const recipeToChange = {
      _id: RECIPE_ID,
      userId: USER_ID,
      ...recipePayload
    };

    const expectRecipeChanged = {
      ...changedRecipe,
      _id: recipeToChange._id.toString(),
      userId: recipeToChange.userId.toString(),
    };

    before(async () => {
      await insertMDB(connectionMock, 'users', { _id: USER_ID, ...userPayload });
      await insertMDB(connectionMock, 'recipes', { ...recipeToChange });

      token = await chai.request(server)
        .post('/login')
        .send(loginPayload)
        .then((res) => res.body.token);

      response = await chai.request(server)
        .put(`/recipes/${RECIPE_ID}`)
        .set('authorization', token)
        .set('user', { userId: USER_ID })
        .send(changedRecipe);
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

    it('tal objeto possui os dados da receita atualizada', () => {
      expect(response.body).to.be.deep.equal(expectRecipeChanged);
    })
  });

  describe('Quando tenta um update sem estar logado', () => {
    let response;
    const ID_EXAMPLE = new ObjectId();

    before(async () => {
      await insertMDB(connectionMock, 'recipes', { _id: ID_EXAMPLE, ...recipePayload });

      response = await chai.request(server)
        .put(`/recipes/${ID_EXAMPLE}`);
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
