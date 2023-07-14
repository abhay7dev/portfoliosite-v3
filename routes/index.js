import { Router as ExpressRouter } from "express";
const router = ExpressRouter();

import ClientRouter from "./client.js";
import PublicRouter from "./public.js";
import APIRouter from "./api.js";

router.use("/api/", APIRouter);
router.use(PublicRouter);
router.use(ClientRouter);

router.use((_, res) => {
    res.status(404).render("error", { error: 404});
});

export default router;