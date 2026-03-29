const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const productRoutes = require('./routes/products');
const warehouseRoutes = require('./routes/warehouses');
const transactionRoutes = require('./routes/transactions');
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 5000;
const mongoUri = process.env.DATABASE_URL || process.env.MONGO_URI;

app.use(cors());
app.use(express.json());

if (!mongoUri) {
  console.error('MongoDB connection string is missing. Set MONGO_URI or DATABASE_URL.');
  process.exit(1);
}

mongoose.connect(mongoUri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/api/products', productRoutes);
app.use('/api/warehouses', warehouseRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Inventory Management API is running');
});
