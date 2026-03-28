const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  type: { type: String, enum: ['in', 'out'], required: true },
  timestamp: { type: Date, default: Date.now },
  warehouseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Warehouse' }
});

module.exports = mongoose.model('Transaction', transactionSchema);