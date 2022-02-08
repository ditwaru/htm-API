const { Router } = require('express');
const { httpGetHome, httpPostHome } = require('../controllers/home.controller');
const homeRouter = Router();
const { authenticateToken } = require('../services/jwt');

homeRouter.get('/', httpGetHome);
homeRouter.post('/', authenticateToken, httpPostHome);

module.exports = homeRouter;
