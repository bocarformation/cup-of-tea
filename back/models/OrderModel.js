import mongoose from "mongoose";


let orderSchema = mongoose.Schema({
    userId: String,
    date: Date,
    items: [{
        ref: String,
        libelle: String,
        conditioning: String,
        price: Number
    }],
    total_price: Number
}, {
    timestamps: true
})

let Order = mongoose.model("Order", orderSchema)

export default Order;
