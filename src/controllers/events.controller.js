const {
  findAllEvents,
  findOneEvent,
  saveEvent,
  deleteEvent,
} = require('../models/events.model');
const { getPagination } = require('../services/query');

const httpGetAllEvents = async (req, res) => {
  const { skip, limit } = getPagination(req.query);
  try {
    const events = await findAllEvents(skip, limit);
    events.length ? res.status(200).json(events) : res.status(404).json([]);
  } catch (e) {
    res.status(500).json({ message: 'An unexpected error occurred' });
  }
};

const httpGetSingleEvent = async (req, res) => {
  const { slug } = req.params;
  try {
    const event = await findOneEvent(slug);
    event
      ? res.status(200).json(event)
      : res.status(404).json({ message: 'Could not find event' });
  } catch (e) {
    res.status(500).json({ message: 'An unexpected error occurred' });
  }
};

const httpPostEvent = async (req, res) => {
  const { body } = req;
  try {
    const event = await saveEvent(body);
    Object.keys(event).length
      ? res.status(201).json(body)
      : res.status(400).json({ message: 'invalid Request' });
  } catch (e) {
    console.log({ controllerEventsCatch: e });
    res.status(500).json({ message: 'An unexpected error occurred' });
  }
};

const httpDeleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await deleteEvent(id);
    Object.keys(event).length
      ? res.status(200).json(event)
      : res.status(404).json({ message: 'Could not find event to delete' });
  } catch (e) {
    res.status(500).json({ message: 'An unexpected error occurred' });
  }
};

const httpPutEvent = async (req, res) => {
  const { body } = req;
  try {
    const event = await saveEvent(body);
    Object.keys(event).length
      ? res.status(200).json(body)
      : res.status(400).json({ message: 'invalid Request' });
  } catch (e) {
    res.status(500).json({ message: 'An unexpected error occurred' });
  }
};

module.exports = {
  httpGetAllEvents,
  httpGetSingleEvent,
  httpPostEvent,
  httpDeleteEvent,
  httpPutEvent,
};
