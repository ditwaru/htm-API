const home = require('./schemas/home.schema');

const findHomeInfo = async () => {
  try {
    return await home.find({}, { _id: 0, __v: 0 });
  } catch (e) {
    return e;
  }
};

const postHomeInfo = async (body) => {
  if (!body.id) {
    Object.assign(body, {
      id: 'home', // there should only be one home post/item, so this ensures that
    });
  }
  try {
    return await home.findOneAndUpdate({ id: 'home' }, body, {
      upsert: true,
      returnOriginal: false,
    });
  } catch (e) {
    return e;
  }
};

module.exports = { findHomeInfo, postHomeInfo };
