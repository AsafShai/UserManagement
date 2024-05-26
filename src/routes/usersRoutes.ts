import { NextFunction, Request, Response, Router } from "express";
import * as usersController from "../controllers/usersController";
import { filterByEmailSchema, filterByNameSchema, getUsersPaginationSchema } from "../utils/types";
import { isEmailData, isNameData, isUserPaginationData } from "../utils/vaildateTypes";

const router = Router();

const filtersRouteHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  if (isNameData(req.query))
    return usersController.getUsersByName(req, res);
  if (isEmailData(req.query))
    return usersController.getUsersByEmail(req, res);
  if (isUserPaginationData(req.query))
    return usersController.getUsersWithPagination(req, res);
    
//   const filterByName = filterByNameSchema.safeParse(query);
//   if (filterByName.success) return usersController.getUsersByName(req, res);
  
//   const filterByEmail = filterByEmailSchema.safeParse(query);
//   if (filterByEmail.success) return usersController.getUsersByEmail(req, res);

//   const userPagination = getUsersPaginationSchema.safeParse(query);
//   if (userPagination.success) return usersController.getUsersWithPagination(req, res);

  return next();
};


router.get("/", filtersRouteHandler);

export default router;
