const Transaction = require('../models/Transaction');
const Product = require('../models/Product');

exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().populate('productId', 'name');
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id).populate('productId', 'name');
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createTransaction = async (req, res) => {
  const transaction = new Transaction(req.body);
  try {
    const product = await Product.findById(req.body.productId);
    if (!product) {
      return res.status(400).json({ message: 'Product not found' });
    }

    if (req.body.type === 'out' && product.stockLevel < req.body.quantity) {
      return res.status(400).json({ message: 'Insufficient stock' });
    }

    const newTransaction = await transaction.save();

    if (req.body.type === 'in') {
      product.stockLevel += req.body.quantity;
    } else {
      product.stockLevel -= req.body.quantity;
    }

    await product.save();

    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteTransaction = async (req, res) => {
  try {
    const deletedTransaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!deletedTransaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    const product = await Product.findById(deletedTransaction.productId);
    if (product) {
        if (deletedTransaction.type === 'in') {
            product.stockLevel -= deletedTransaction.quantity;
        } else {
            product.stockLevel += deletedTransaction.quantity;
        }
        await product.save();
    }

    res.json({ message: 'Transaction deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};