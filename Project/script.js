const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Bookings = require('./models/model');

mongoose.connect(
  'mongodb+srv://dev:123@cluster0.0rx81.mongodb.net/appointments'
);

app.use('/', express.static(path.resolve(__dirname, 'assets')));
app.use(bodyParser.json());

app.post('/api/create', async (req, res) => {
  await Bookings.create(req.body);
  res.json({ status: 'ok' });
});

app.get('/api/get', async (req, res) => {
  const records = await Bookings.find({});
  res.json(records);
});

app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});
