const { Router } = require('express');
const {
  httpGetAllEvents,
  httpGetSingleEvent,
  httpPostEvent,
  httpDeleteEvent,
  httpPutEvent,
} = require('../controllers/events.controller');
const { authenticateToken } = require('../services/jwt');

const eventsRouter = Router();

eventsRouter.get('/', httpGetAllEvents);
eventsRouter.get('/:slug', httpGetSingleEvent);
eventsRouter.post('/', authenticateToken, httpPostEvent);
eventsRouter.put('/', authenticateToken, httpPutEvent);
eventsRouter.delete('/:id', authenticateToken, httpDeleteEvent);

module.exports = eventsRouter;
