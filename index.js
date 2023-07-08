import express from "express";
const app = express();

import * as config from "./config.js";
import { join } from "path";

app.use(express.static(join(config.root, "public")));

import layouts from "express-ejs-layouts";
app.set("view engine", "ejs");
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);
app.set("layout extractMetas", true);
app.use(layouts);

app.set("json spaces", 4);
app.set("x-powered-by", false);

app.get("/", (req, res) => {
    res.render("index");
});

app.use((req, res, next) => {
    res.status(404).render("error", { error: 404});
});

app.listen(config.PORT, () => {
    console.log(
		"Listening on %s\nStarting at %s pacific time\nRunning '%s' version",
		config.NODE_ENV == "production" ? `port ${config.PORT}` : `http://localhost:${config.PORT}`,
		new Date().toLocaleString("en-US", {timeZone: config.SERVER_TIME_ZONE}),
		config.NODE_ENV
	);
});