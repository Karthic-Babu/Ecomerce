const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController')

// Get all pending products
router.get('/products/pending', adminController.getPendingProducts);

// Approve a product
router.patch('/products/approve/:productId', adminController.approveProduct);

module.exports = router;
