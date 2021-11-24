const chai = require('chai');
const fs = require('fs');
const path = require('path');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const server = require('../api/app');
const { MongoClient, ObjectId } = require('mongodb');
const { getConnection } = require('./mock/connectionMock');
chai.use(chaiHttp);
const { expect } = chai;
const { insertMDB, dropMDB } = require('./mock/insertAndDrop');
const { userPayload, recipePayload, loginPayload } = require('./mock/payloadMock');

describe('PUT /recipes/:id/image', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(() => {
    MongoClient.connect.restore();
  });

  describe('Quando realiza o upload com sucesso', () => {
    let response;
    let token;
    const USER_ID = new ObjectId();
    const RECIPE_ID = new ObjectId();

    const recipeToChange = {
      _id: RECIPE_ID,
      userId: USER_ID,
      ...recipePayload
    };

    before(async () => {
      await insertMDB(connectionMock, 'users', { _id: USER_ID, ...userPayload });
      await insertMDB(connectionMock, 'recipes', { ...recipeToChange });
      const photoFile = path.resolve(__dirname, '..', 'uploads', 'ratinho.jpg');

      token = await chai.request(server)
        .post('/login')
        .send(loginPayload)
        .then((res) => res.body.token);

      response = await chai.request(server)
        .put(`/recipes/${RECIPE_ID}/image`)
        .set('content-type', 'multipart/form-data')
        .set('authorization', token)
        .set('user', { userId: USER_ID })
        .attach('image', fs.readFileSync(photoFile), 'ratinho.png');
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

    it('tal objeto possui a propriedade "image"', () => {
      expect(response.body).to.have.property('image');
    });

    it(`"image" possui o valor "localhost:3000/src/uploads/${RECIPE_ID}.jpeg"`, () => {
      expect(response.body.image).to.be
        .equals(`localhost:3000/src/uploads/${RECIPE_ID}.jpeg`);
    });
  });

  describe('Quando tenta um update sem estar logado', () => {
    let response;
    const ID_EXAMPLE = new ObjectId();

    before(async () => {
      await insertMDB(connectionMock, 'recipes', { _id: ID_EXAMPLE, ...recipePayload });

      response = await chai.request(server)
        .put(`/recipes/${ID_EXAMPLE}/image`);
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
