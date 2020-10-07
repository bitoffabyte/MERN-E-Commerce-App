import products from './data/products.js';
import users from './data/users.js';
import dotenv from 'dotenv';
import colors from 'colors';
import Product from './models/Product.js';
import Order from './models/Order.js';
import connectdb from './config/db.js';
import User from './models/User.js';
dotenv.config();
connectdb();
const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;
        const sampleProducts = products.map((i) => {
            return { ...i, user: adminUser };
        });
        await Product.insertMany(sampleProducts);
        console.log(sampleProducts);
        console.log(`Data added`.green.inverse);
    } catch (err) {
        console.error(`${err}`.red.inverse);
        conso;
        // process.exit(1);
    }
};
const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        console.log(`Data deleted`.red.inverse);
    } catch (err) {
        console.error(`${err}`.red.inverse);
        process.exit(1);
    }
};
if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
