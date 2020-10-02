import mongo from 'mongoose';
const connectdb = async () => {
    try {
        const conn = await mongo.connect(process.env.mongo_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        });
        console.log(
            `Mongodb connected: ${conn.connection.host}`.blue.underline
        );
    } catch (err) {
        console.log(`Error: ${err.message}`.red.underline.bold);
        process.exit(1);
    }
};

export default connectdb;
