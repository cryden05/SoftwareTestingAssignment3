const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: String,
  stockLevel: { type: Number, default: 0 },
  reorderThreshold: { type: Number, default: 10 },
});

module.exports = mongoose.model('Product', productSchema);