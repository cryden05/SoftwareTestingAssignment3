const express = require('express');
const router = express.Router();
const warehouseController = require('../controllers/warehouseController');
const { authenticateToken, authorizeRole } = require('../middleware/authMiddleware');

router.get('/', authenticateToken, warehouseController.getAllWarehouses);
router.get('/:id', authenticateToken, warehouseController.getWarehouseById);
router.post('/', authenticateToken, authorizeRole(['admin', 'manager']), warehouseController.createWarehouse);
router.put('/:id', authenticateToken, authorizeRole(['admin', 'manager']), warehouseController.updateWarehouse);
router.delete('/:id', authenticateToken, authorizeRole(['admin']), warehouseController.deleteWarehouse);

module.exports = router;