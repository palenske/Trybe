const routes = require('express').Router();
const validateAdminToken = require('../auth/validateAdminToken');

const managerController = require('../controllers/managerController');

routes.post('/admin/register', validateAdminToken, managerController.userRegister);
routes.delete('/admin/delete', validateAdminToken, managerController.deleteUser);

module.exports = routes;