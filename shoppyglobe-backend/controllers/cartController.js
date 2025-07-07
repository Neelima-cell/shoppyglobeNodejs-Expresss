const Cart = require('../models/Cart');
const Product = require('../models/Product');

// POST /cart - Add product to cart
exports.addToCart = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { productId, quantity } = req.body;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }
    const itemIndex = cart.items.findIndex(item => item.product.equals(productId));
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }
    await cart.save();
    res.status(201).json(cart);
  } catch (err) {
    next(err);
  }
};

// PUT /cart/:id - Update quantity of a product in cart
exports.updateCartItem = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { quantity } = req.body;
    const cart = await Cart.findOne({ user: userId });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });
    const item = cart.items.id(req.params.id);
    if (!item) return res.status(404).json({ message: 'Cart item not found' });
    item.quantity = quantity;
    await cart.save();
    res.json(cart);
  } catch (err) {
    next(err);
  }
};

// DELETE /cart/:id - Remove product from cart
exports.removeCartItem = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const cart = await Cart.findOne({ user: userId });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });
    const item = cart.items.id(req.params.id);
    if (!item) return res.status(404).json({ message: 'Cart item not found' });
    cart.items.pull(req.params.id); // <-- This line removes the item
    await cart.save();
    res.json(cart);
  } catch (err) {
    next(err);
  }
};

// GET /cart - Get current user's cart
exports.getCart = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const cart = await Cart.findOne({ user: userId }).populate('items.product');
    if (!cart) {
      return res.json({ items: [] });
    }
    res.json(cart);
  } catch (err) {
    next(err);
  }
}; 