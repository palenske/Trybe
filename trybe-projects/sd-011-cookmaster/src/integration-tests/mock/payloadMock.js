const userPayload = {
  name: 'user',
  email: 'user@mail.com',
  password: 'p4ssw0rd',
};

const adminPayload = {
  name: 'adminUser',
  email: 'user@admin.com',
  password: 'P4SSW0RD',
}

const recipePayload = {
  name: 'recipeName',
  ingredients: 'ingredient 1, ingredient 2',
  preparation: 'do-it',
};

const { name, ...loginPayload } = userPayload;

module.exports = {
  userPayload,
  adminPayload,
  recipePayload,
  loginPayload
};
