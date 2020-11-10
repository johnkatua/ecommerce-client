const express = require('express');
const router = express.Router();

const { create, productById, read, remove, update } = require('../controllers/product');
const { requireSignIn, isAdmin, isAuth } = require('../controllers/auth');
const { userById } = require('../controllers/user');


router.get('/product/:productId', read);
router.post("/product/create/:userId", requireSignIn, isAdmin, isAuth, create);
router.delete('/product/:productId/:userId', requireSignIn, isAdmin, isAuth, remove);
router.put('/product/:productId/:userId', requireSignIn, isAdmin, isAuth, update);
router.param('userId', userById);
router.param('productId', productById);


module.exports = router;