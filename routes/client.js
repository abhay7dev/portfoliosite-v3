import { Router as ExpressRouter } from "express";
const router = ExpressRouter();

import layouts from "express-ejs-layouts";
router.use(layouts);

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/minecraft", (req, res) => {
    res.render("minecraft");
});

export default router;