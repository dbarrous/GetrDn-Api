import { Router } from "express";
import controllers from "./list.controllers";

const router = Router();

// /api/list
router
  .route("/")
  .get(controllers.getOne)
  .post(controllers.createOne)
  .put(controllers.updateOne);

export default router;
