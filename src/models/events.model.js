const events = require('./schemas/events.schema');
const { nanoid } = require('nanoid');

const findAllEvents = async (skip, limit) => {
  try {
    return await events
      .find({}, { _id: 0, __v: 0 })
      .sort({ title: 1 })
      .skip(skip)
      .limit(limit);
  } catch (e) {
    return e;
  }
};

const findOneEvent = async (slug) => {
  try {
    return events.findOne({ slug }, { _id: 0, __v: 0 });
  } catch (e) {
    return e;
  }
};

const saveEvent = async (event) => {
  if (!event.id) {
    Object.assign(event, {
      id: nanoid(),
    });
  }
  if (!event.slug) {
    Object.assign(event, {
      slug: event.title
        .toLowerCase()
        .replace(/[^\w\s]/gi, '')
        .replace(/ /g, '-'),
    });
  }

  try {
    return await events.findOneAndUpdate({ id: event.id }, event, {
      returnOriginal: false,
      upsert: true,
    });
  } catch (e) {
    return e;
  }
};

const deleteEvent = async (id) => {
  try {
    return await events.findOneAndDelete({ id });
  } catch (e) {
    return e;
  }
};

module.exports = { findAllEvents, findOneEvent, saveEvent, deleteEvent };
