const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const recordsRouter = require('./controllers/records');
const accessRouter = require('./controllers/access');

const app = express();
app.use(bodyParser.json());

app.use('/records', recordsRouter);
app.use('/access', accessRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
