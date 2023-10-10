import mongoose from "mongoose";


let teaSchema = mongoose.Schema({
    ref: Number,
    name: String,
    description: String,
    category: String,
    img_min: String,
    img_big: String,
    orders_count: Number,
    stock: Number,
    conditioning: [{
        libelle: String,
        price: Number,
        remise: Number
    }],
    mini_desc: String,

},{
    timestamps: true
})

let Tea = mongoose.model("Tea", teaSchema)

export default Tea;