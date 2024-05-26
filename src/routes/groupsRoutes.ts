import { Router } from "express";
import * as groupsController from "../controllers/groupsController"

const router = Router();

router.delete("/:groupId/user/:userId", groupsController.deleteUserFromGroup);

export default router;