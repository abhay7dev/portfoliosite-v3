import { static as expressStatic, Router as ExpressRouter } from "express";
const router = ExpressRouter();

import { root } from "../config.js";
import { join as pathJoin } from "path";

router.use(expressStatic(pathJoin(root, "public")));

export default router;