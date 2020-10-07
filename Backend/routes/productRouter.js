import express from 'express';
import products from '../data/products.js';
import Product from '../models/Product.js';
import eah from 'express-async-handler';
const router = express.Router();

router.get(
    '/:id',
    eah(async (req, res) => {
        const product = await Product.findById(req.params.id);
        console.log('sdsds');
        if (product) {
            res.json(product);
        } else {
            res.status(404);
            console.log('sds');
            throw new Error('Product Not found');
        }
    })
);
router.get(
    '/',
    eah(async (req, res) => {
        const products = await Product.find({});
        res.json(products);
    })
);
export default router;
