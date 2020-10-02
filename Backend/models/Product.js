import mongo from 'mongoose';

const reviewSchema = mongo.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        comment: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);
const userSchema = mongo.Schema(
    {
        user: {
            type: mongo.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        reviews: [reviewSchema],
        name: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        category: {
            type: Boolean,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            default: 0,
        },
        numReviews: {
            type: Number,
            required: true,
            default: 0,
        },
        countInStock: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    { timestamps: true }
);
const Product = mongo.model('Product', userSchema);
export default Product;
