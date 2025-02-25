const Product = require('../model/Product');

// Get all products awaiting approval
exports.getPendingProducts = async (req, res) => {
  try {
    const pendingProducts = await Product.find({ isApproved: false });
    res.json(pendingProducts);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving pending products' });
  }
};

// Approve a product
exports.approveProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    product.isApproved = true;
    await product.save();
    res.json({ message: 'Product approved' });
  } catch (error) {
    res.status(500).json({ error: 'Error approving product' });
  }
};
