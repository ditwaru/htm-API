const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();

const api = require('./routes/api');

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(express.json());
app.use(helmet());
app.use(api);

module.exports = app;
