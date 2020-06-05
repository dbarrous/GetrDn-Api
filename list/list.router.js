import { Router } from "express";
import controllers from "./list.controllers";

const router = Router();

// /api/list
router.route("/").post(controllers.createOne).put(controllers.updateOne);
router.route("/:id").get(controllers.getOne);
export default router;
