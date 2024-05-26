import { NextFunction, Request, Response, Router } from "express";
import * as usersController from "../controllers/usersController";
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

  return next();
};


router.get("/", filtersRouteHandler);
router.patch("/", usersController.updateUsersStatuses) //Can scale it with LoadBalancer with kubernetes

export default router;
