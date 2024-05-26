import mongoose from "mongoose";
import { GroupStatus } from "../utils/types";


const groupSchema = new mongoose.Schema({
    users: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        default: []
    },
    status: {
        type: String,
        enum: [...Object.values(GroupStatus)],
        default: GroupStatus.empty
    }
});

export const GroupModel = mongoose.model("Group", groupSchema);