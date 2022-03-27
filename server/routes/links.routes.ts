import { Router } from "express";
const router = Router();

import { linkController } from "../controllers";

router.get("/get-links", linkController.getLinks);

export default router;
