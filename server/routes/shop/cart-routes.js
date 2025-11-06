const express = require('express');
const { addToCart, fetchCartItems, updateCartItemQty, deleteCartItem } = require('../../controllers/shop/cart-controller');
const router = express.Router();

router.post('/add', addToCart);
router.get('/get/:userId', fetchCartItems);
router.put('/update-cart/:id', updateCartItemQty);
router.delete('/:userId/:productId', deleteCartItem);

module.exports = router;