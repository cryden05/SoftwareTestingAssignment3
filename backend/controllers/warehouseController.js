const Warehouse = require('../models/Warehouse');

exports.getAllWarehouses = async (req, res) => {
  try {
    const warehouses = await Warehouse.find().populate('managerId', 'username');
    res.json(warehouses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getWarehouseById = async (req, res) => {
  try {
    const warehouse = await Warehouse.findById(req.params.id).populate('managerId', 'username');
    if (!warehouse) {
      return res.status(404).json({ message: 'Warehouse not found' });
    }
    res.json(warehouse);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createWarehouse = async (req, res) => {
  const warehouse = new Warehouse(req.body);
  try {
    const newWarehouse = await warehouse.save();
    res.status(201).json(newWarehouse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateWarehouse = async (req, res) => {
  try {
    const updatedWarehouse = await Warehouse.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('managerId', 'username');
    if (!updatedWarehouse) {
      return res.status(404).json({ message: 'Warehouse not found' });
    }
    res.json(updatedWarehouse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteWarehouse = async (req, res) => {
  try {
    const deletedWarehouse = await Warehouse.findByIdAndDelete(req.params.id);
    if (!deletedWarehouse) {
      return res.status(404).json({ message: 'Warehouse not found' });
    }
    res.json({ message: 'Warehouse deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};