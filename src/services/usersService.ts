import { UserModel } from "../models/userModel";
import { User, UsersPaginationData } from "../utils/types";

export const getUsersWithPagination = async (
  paginationData: UsersPaginationData
) => {
  let usersQuery = UserModel.find();
  if (paginationData.offset) usersQuery.skip(paginationData.offset);
  if (paginationData.limit) usersQuery.limit(paginationData.limit);
  //FIXME: add return type
  return await usersQuery.exec();
};

export const getUsersByName = async (name: String) => {
  const user = await UserModel.find({ name: { $eq: name } });
  return user;
};

export const getUsersByEmail = async (email: String) => {
  const user = await UserModel.find({ email: { $eq: email } });
  return user;
};
