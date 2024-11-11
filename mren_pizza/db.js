const mongoose = require('mongoose');

var mongoURL =
  'mongodb+srv://rezt:urgen@mern-pizza.9y6fq.mongodb.net/?retryWrites=true&w=majority&appName=mern-pizza'
mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;
db.on('connected', () => {
  console.log(`mongo DB connection success`);
});

db.on('error', () => {
  console.log(`mongo DB connection failed`);
});

module.exports = mongoose;
