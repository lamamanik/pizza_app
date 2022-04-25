const cors = require('cors');
const express = require('express');
const pizza = require('./models/pizzaModel');
const db = require('./db');
const app = express();
const pizzasRoute = require('./routes/pizzasRoutes');
const userRoute = require('./routes/userRoute');
const ordersRoute = require('./routes/ordersRoute');

app.use(express.json());
app.use(cors());

app.use('/api/pizzas/', pizzasRoute);
app.use('/api/users/', userRoute);
app.use('/api/orders/', ordersRoute);
app.use(express.json());
app.get('/', (req, res) => {
  res.send('server working');
});

const port = process.env.PORT || 8000;

app.listen(port, () => `server is running on port ${port}`);
