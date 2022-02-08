const { findHomeInfo, postHomeInfo } = require('../models/home.model');

const httpGetHome = async (req, res) => {
  try {
    const homePageInfo = await findHomeInfo();
    homePageInfo.length
      ? res.status(200).json(homePageInfo)
      : res.status(404).json({ message: 'Could not find home page info' });
  } catch (e) {
    res.status(500).json({ message: 'An unexpected error occurred' });
  }
};
const httpPostHome = async (req, res) => {
  const { body } = req;
  try {
    const newHomePageInfo = await postHomeInfo(body);
    Object.keys(newHomePageInfo).length
      ? res.status(201).json(newHomePageInfo)
      : res.status(400).json({ message: 'Error posting home info' });
  } catch (e) {
    res.status(500).json({ message: 'An unexpected error occurred' });
  }
};

module.exports = { httpGetHome, httpPostHome };
