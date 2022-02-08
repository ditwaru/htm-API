const about = require('./schemas/about.schema');

const findAboutInfo = async () => {
  try {
    return await about.find({}, { _id: 0, __v: 0 });
  } catch (e) {
    return e;
  }
};

const postAboutInfo = async (body) => {
  if (!body.id) {
    Object.assign(body, {
      id: 'about', // there should only be one about post/item, so this ensures that
    });
  }
  try {
    return await about.findOneAndUpdate({ id: 'about' }, body, {
      upsert: true,
      returnOriginal: false,
    });
  } catch (e) {
    return e;
  }
};

module.exports = { findAboutInfo, postAboutInfo };
