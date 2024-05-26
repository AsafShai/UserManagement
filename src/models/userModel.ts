import mongoose from "mongoose";
import { UserStatus } from "../utils/types";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: [...Object.values(UserStatus)],
        required: true
    },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group"
    }
})

export const UserModel = mongoose.model("User", userSchema);