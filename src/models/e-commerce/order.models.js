import mongoose from 'mongoose'

const orderItemSchema = mongoose.Schema({ // mini model
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: String,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    orderItems: {
        type: [orderItemSchema]
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['PENDING', 'CANCELLED', 'DELIVERED'], // provides choices
        default: 'PENDING'
    }
}, {timestamps: true})

export const orderItems = mongoose.model('orderItems', orderItemSchema)

export const order = mongoose.model('order', orderSchema)