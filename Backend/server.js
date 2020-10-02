import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
import colors from 'colors';
import connectdb from './config/db.js';
dotenv.config();
connectdb();
const app = express();
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('API is running');
});
app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    console.log(product);
    res.json(product);
});
app.get('/api/products', (req, res) => {
    res.json(products);
});
app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
            .bold
    )
);
