const { Router } = require('express');
const {
  httpGetAbout,
  httpPutAbout,
} = require('../controllers/about.controller');

const { authenticateToken } = require('../services/jwt');
const aboutRouter = Router();

aboutRouter.get('/', httpGetAbout);
aboutRouter.put('/', authenticateToken, httpPutAbout);

module.exports = aboutRouter;
