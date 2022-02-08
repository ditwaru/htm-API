const { Router } = require('express');

const blogsRouter = require('./blogs.router');
const eventsRouter = require('./events.router');
const aboutRouter = require('./about.router');
const socialRouter = require('./social.router');
const homeRouter = require('./home.router');
const authRouter = require('./auth.router');

const api = Router();

api.use('/auth', authRouter);
api.use('/blogs', blogsRouter);
api.use('/events', eventsRouter);
api.use('/about', aboutRouter);
api.use('/social', socialRouter);
api.use('/home', homeRouter);

module.exports = api;
