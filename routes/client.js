import { Router as ExpressRouter } from "express";
const router = ExpressRouter();

import layouts from "express-ejs-layouts";
router.use(layouts);

import minecraft from "../controllers/minecraft.js";
import valorant from "../controllers/valorant.js";
import xbox from "../controllers/xbox.js";
import projects from "../controllers/projects.js"

import ejsData from "../middleware/data.js";
router.use(ejsData);

// TODO: Implement Rate Limiting and CSP

router.get("/", (_, res) => res.render("index"));
router.get("/about", (_, res) => res.render("about"));
router.get("/skills", (_, res) => res.render("skills"));
router.get("/projects", await projects);
router.get("/contact", (_, res) => res.render("contact"));

router.get("/minecraft", minecraft);
router.get("/valorant", await valorant);
router.get("/xbox", await xbox);

// TODO: Implement Error Handling

export default router;