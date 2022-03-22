import { Router } from "express";
const router = Router();

import { blogController } from "../controllers";

router.get("/publicaciones", blogController.getPosts);

export default router;
