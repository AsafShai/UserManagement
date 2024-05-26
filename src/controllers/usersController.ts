import { Request, Response } from "express";
import { filterByEmailSchema, filterByNameSchema, getUsersPaginationSchema } from "../utils/types";
import { fromError } from "zod-validation-error";
import * as usersService from '../services/usersService'

export const getUsersWithPagination = async (req: Request, res: Response) => {
    const queryData = getUsersPaginationSchema.safeParse(req.query);
    if (!queryData.success)
        return res.status(400).json({message: fromError(queryData.error)});
    const users = await usersService.getUsersWithPagination(queryData.data);
    return res.status(200).json({"users": users});
}

export const getUsersByName = async (req: Request, res: Response) => {
    const queryData = filterByNameSchema.safeParse(req.query);
    if (!queryData.success)
        return res.status(400).json({message: fromError(queryData.error)});
    const users = await usersService.getUsersByName(queryData.data.name);
    return res.status(200).json({"users": users});
}

export const getUsersByEmail = async (req: Request, res: Response) => {
    const queryData = filterByEmailSchema.safeParse(req.query);
    if (!queryData.success)
        return res.status(400).json({message: fromError(queryData.error)});
    const users = await usersService.getUsersByEmail(queryData.data.email);
    return res.status(200).json({"users": users});
}

export const updateUsersStatuses = (req: Request, res: Response) => {
    const body = JSON.parse(req.body);
    //TODO: implement validation and if valid, update using foreach
}