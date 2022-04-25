const mongoose = require('mongoose');

var mongoURL =
  'mongodb+srv://ahim:iamlocked@cluster0.c1ayo.mongodb.net/mern-pizza';
mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;
db.on('connected', () => {
  console.log(`mongo DB connection success`);
});

db.on('error', () => {
  console.log(`mongo DB connection failed`);
});

module.exports = mongoose;
