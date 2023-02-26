import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    username: {
        type: String,
        required: true,
        ref: 'User',
    },
    email: {
        type: String,
        required: true,
        ref: 'User',
    },
    orderItems: [
        {
            name: {type: String, required: true},
            qty: {type: Number, required: true},
            image: {type: String, required: true},
            price: {type: Number, required: true},
            id: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product'},
        },
    ],
    shippingAddress: {
        address1: {type: String, required: true},
        address2: {type: String, required: false},
        city: {type: String, required: true},
        state: {type: String, required: true},
        zipcode: {type: String, required: true},
    },
    paymentMethod: {
        type: String,
        default: false,
    },
    paymentDetails: {
        orderId: { type: String },
        payerId: { type: String },
    },
    shippingPrice: {
        type: Number,
        default: 0.0,
    },
    totalPrice: {
        type: Number,
        default: 0.0,
    },
    paidAt: {
        type: Date,
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false,
    },
    deliveredAt: {
        type: Date,
    },
  }, 
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);
export default Order;