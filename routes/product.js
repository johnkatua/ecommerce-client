const express = require('express');
const router = express.Router();

const { create, productById, read, remove, update, list, relatedList, listCategories, listBySearch, photo } = require('../controllers/product');
const { requireSignIn, isAdmin, isAuth } = require('../controllers/auth');
const { userById } = require('../controllers/user');



router.get('/product/:productId', read);
router.post("/product/create/:userId", requireSignIn, isAdmin, isAuth, create);
router.delete('/product/:productId/:userId', requireSignIn, isAdmin, isAuth, remove);
router.put('/product/:productId/:userId', requireSignIn, isAdmin, isAuth, update);
router.get('/products', list)
router.get('/products/related/:productId', relatedList);
router.get('/products/categories', listCategories);
router.post('/products/by/search', listBySearch);
router.get('/product/photo/:productId', photo)

router.param('userId', userById);
router.param('productId', productById);


module.exports = router;