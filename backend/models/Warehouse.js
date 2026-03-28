const mongoose = require('mongoose');

const warehouseSchema = new mongoose.Schema({
  location: { type: String, required: true },
  managerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Warehouse', warehouseSchema);