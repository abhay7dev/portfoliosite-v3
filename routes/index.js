import { Router as ExpressRouter } from "express";
const router = ExpressRouter();

import rateLimit from "express-rate-limit";

import ClientRouter from "./client.js";
import PublicRouter from "./public.js";

router.use(rateLimit({
    windowMs: 1000 * 60,
    limit: 20,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
}));
router.use(PublicRouter);
router.use(ClientRouter);

router.use((_, res) => {
    res.data.error = 404;
    res.status(404).render("error");
});

export default router;