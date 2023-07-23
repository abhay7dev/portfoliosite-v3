import { Router as ExpressRouter } from "express";
const router = ExpressRouter();

import minecraft from "../controllers/minecraft.js";

router.get("/minecraft", minecraft);

export default router;