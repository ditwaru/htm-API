const { findAboutInfo, postAboutInfo } = require('../models/about.model');

const httpGetAbout = async (req, res) => {
  try {
    const aboutPageInfo = await findAboutInfo();
    aboutPageInfo.length
      ? res.status(200).json(aboutPageInfo)
      : res.status(404).json({ message: 'Could not find about page info' });
  } catch (e) {
    res.status(500).json({ message: 'An unexpected error occurred' });
  }
};
const httpPutAbout = async (req, res) => {
  const { body } = req;
  try {
    const newAboutPageInfo = await postAboutInfo(body);
    Object.keys(newAboutPageInfo).length
      ? res.status(200).json(newAboutPageInfo)
      : res.status(400).json({ message: 'Error posting about info' });
  } catch (e) {
    res.status(500).json({ message: 'An unexpected error occurred' });
  }
};

module.exports = { httpGetAbout, httpPutAbout };
