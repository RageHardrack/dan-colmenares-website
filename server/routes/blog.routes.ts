import { Router } from "express";
const router = Router();

import { blogController } from "../controllers";

router.get("/publicaciones", blogController.getPosts);

router.get("/publicaciones/:slug", blogController.getPostContent);

export default router;
