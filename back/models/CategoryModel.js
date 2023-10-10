import mongoose from "mongoose";


let categorySchema = mongoose.Schema({
    name: String,
    description: String,
    img: String,
}, {
    timestamps: true
})

let Category = mongoose.model("Category", categorySchema)

export default Category;
