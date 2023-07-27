import { Router as ExpressRouter } from "express";
const router = ExpressRouter();

import layouts from "express-ejs-layouts";
router.use(layouts);

import minecraft from "../controllers/minecraft.js";
import valorant from "../controllers/valorant.js";

import ejsData from "../middleware/data.js";
router.use(ejsData);

router.get("/", (_, res) => res.render("index"));

router.get("/minecraft", minecraft);
router.get("/valorant", valorant);

export default router;