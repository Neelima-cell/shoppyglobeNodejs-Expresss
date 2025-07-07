const express = require('express');
const router = express.Router();
const { addToCart, updateCartItem, removeCartItem, getCart } = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, addToCart);
router.put('/:id', protect, updateCartItem);
router.delete('/:id', protect, removeCartItem);
router.get('/', protect, getCart);

module.exports = router; 