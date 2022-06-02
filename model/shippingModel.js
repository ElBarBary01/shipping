import mongoose from 'mongoose'

const shippingSchema = mongoose.Schema({
    order_Id: {type: String, unique: true},
    total: Number,
    address: String,
    status: {type: String, enum: ['CREATED', 'SHIPPED', 'DELIVERED', 'RETURNED'], default: 'CREATED'}
})

const Shipping = mongoose.model('Shipping', shippingSchema)
export default Shipping;