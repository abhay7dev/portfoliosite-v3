import { Router as ExpressRouter } from "express";
const router = ExpressRouter();

import ClientRouter from "./client.js";
import PublicRouter from "./public.js";

router.use(PublicRouter);
router.use(ClientRouter);

export default router;