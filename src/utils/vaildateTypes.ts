import { UsersPaginationData } from "./types";

export const isUserPaginationData = (obj: any): obj is UsersPaginationData => {
  return typeof obj === "object" && ("limit" in obj || "offset" in obj);
};

export const isNameData = (obj: any): obj is {name: String} => {
    return typeof obj == "object" && "name" in obj;
}

export const isEmailData = (obj: any): obj is {email: String} => {
    return typeof obj == "object" && "email" in obj;
}
