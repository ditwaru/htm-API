const { Router } = require('express');
const {
  httpGetSocials,
  httpPostSocials,
} = require('../controllers/social.controller');

const socialRouter = Router();

socialRouter.get('/', httpGetSocials);
socialRouter.post('/', httpPostSocials);

module.exports = socialRouter;
