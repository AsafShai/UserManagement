import { Request, Response } from "express";
import * as groupsService from "../services/groupsService"
import { NotFoundError } from "../errors/NotFoundError";


export const deleteUserFromGroup = (req: Request, res: Response) => {
    const {groupId, userId } =  req.params; //TODO: validate with zod
    try {
        groupsService.deleteUserFromGroup(groupId, userId);
        return res.sendStatus(204);
    } catch (error) {
        if (error instanceof NotFoundError)
            return res.status(error.statusCode).json({ message: error})
        return res.sendStatus(500); 
    }
}