const express = require('express');
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  checkStock
} = require('../controllers/productController');

const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').get(getProducts).post(protect, createProduct);
router.route('/:id').get(getProductById).put(protect, updateProduct).delete(protect, deleteProduct);

module.exports = router;

router.get('/:id/stock', checkStock);
