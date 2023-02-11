import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        HosName:{
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        email:{
            type: String,
            required: true,
            min: 2,
            max: 50,
            unique: true,
        },
        password:{
            type: String,
            required: true,
            min: 5,
        },
        address:{
            type: String,
            required: true,
            min: 2,
            max: 50,
            unique: true,
        },
        mobile:{
            type: Number,
            required: true,
            min: 2,
            max: 50,
        },
        picturePath:{
            type: String,
            default: "",
        },
    }, {timestamps: true}
);

const User = mongoose.model("User",UserSchema);
export default User;