import mongoose from "mongoose";
import bcrypt from "bcrypt";

let userSchema = mongoose.Schema({

    login: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    role: {
        type: String,
        default: "User"
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true
} )

// HACHAGE DU MOT DE PASSE
// Ce hook va se déclencher avant que la fonction save (User.save()) soit déclenché
userSchema.pre("save", function (next){
    if(!this.isModified("password")){
        return next();
    }
    this.password = bcrypt.hashSync(this.password, 10)
    next();
})

let User = mongoose.model("User", userSchema)

export default User