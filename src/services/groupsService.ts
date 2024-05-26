import { NODATA } from "dns";
import { GroupModel } from "../models/groupModel";
import { UserModel } from "../models/userModel";
import { GroupStatus } from "../utils/types";
import { NotFoundError } from "../errors/NotFoundError";

export const deleteUserFromGroup = async (groupId: String, userId: String) => {
    //FIXME: causes compile error

    // const group = await GroupModel.findById(groupId);
    // if (!group) throw new NotFoundError("Group not found", 404); 

    // const user = await UserModel.findById(userId);
    // if (!user) throw new NotFoundError("User not found", 404);

    // group.users = group.users.filter(id => String(id) !== userId);
    // if (!group.users.length)
    //     group.status = GroupStatus.empty;
    // user.group = null;
    // await user.save();
    // return await group.save(); 
}