const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoUri = process.env.DATABASE_URL || process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error('MongoDB connection string is missing. Set MONGO_URI or DATABASE_URL.');
    }

    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
