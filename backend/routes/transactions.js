const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const { authenticateToken, authorizeRole } = require('../middleware/authMiddleware');

router.get('/', authenticateToken, transactionController.getAllTransactions);
router.get('/:id', authenticateToken, transactionController.getTransactionById);
router.post('/', authenticateToken, authorizeRole(['admin', 'manager', 'staff']), transactionController.createTransaction);
router.delete('/:id', authenticateToken, authorizeRole(['admin']), transactionController.deleteTransaction);

module.exports = router;