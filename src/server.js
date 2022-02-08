const { createServer } = require('http');

require('dotenv').config();

const { mongooseConnect } = require('./services/mongo');

const app = require('./app');
const server = createServer(app);

const PORT = process.env.PORT || 1338;

const startServer = async () => {
  await mongooseConnect();
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
};

startServer();
