import mongo from 'mongoose';
const orderSchema = mongo.Schema(
    {
        user: {
            type: mongo.Schema.Types.ObjectId,
            required: true,
            ref: User,
        },
        orderItems: [
            {
                name: {
                    type: String,
                    required: true,
                },
                qty: {
                    type: Number,
                    required: true,
                },
                image: {
                    type: String,
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
                },
                product: {
                    type: mongo.Schema.Types.ObjectId,
                    required: true,
                    ref: 'Product',
                },
            },
        ],
        shippingAddress: {
            address: {
                type: String,
                required: true,
            },
            city: {
                type: String,
                required: true,
            },
            postalCode: {
                type: String,
                required: true,
            },
            country: {
                type: String,
                required: true,
            },
        },
        paymentMethod: {
            type: String,
            required: true,
        },
        paymentResult: {
            id: {
                type: String,
            },
            status: {
                type: String,
            },
            updatetime: {
                type: String,
            },
            email_address: {
                type: String,
            },
        },
        taxPrice: {
            type: Number,
            required: true,
            default: 0.0,
        },
        shippingPrice: {
            type: Number,
            required: true,
            default: 0.0,
        },
        totalPrice: {
            type: Number,
            required: true,
            default: 0.0,
        },
        isPaid: {
            type: true,
            default: true,
        },
        paidAt: {
            type: Date,
        },
        isDelivered: {
            type: boolean,
            required: true,
            default: fasle,
        },
        deliveredAt: {
            type: Date,
        },
    },
    { timestamps: true }
);
const Order = mongo.model('Order', userSchema);
export default Order;
