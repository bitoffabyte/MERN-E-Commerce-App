import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
import colors from 'colors';
import productRoutes from './routes/productRouter.js';
import connectdb from './config/db.js';
import { notFound, errorHandler } from './middleware/middleware.js';
dotenv.config();
connectdb();
const app = express();
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('API is running');
});
app.use('/api/products', productRoutes);
app.use(notFound);
app.use(errorHandler);
app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
            .bold
    )
);
