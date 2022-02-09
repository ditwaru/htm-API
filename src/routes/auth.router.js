const { Router } = require('express');

const {
  authLogin,
  authCallback,
  authCreateUser,
} = require('../controllers/auth.controller');

const authRouter = Router();
authRouter.post('/create', authCreateUser);
authRouter.post('/login', authLogin);
authRouter.get('/callback', authCallback);

module.exports = authRouter;
