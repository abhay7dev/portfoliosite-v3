import { PORT, NODE_ENV, SERVER_TIME_ZONE} from "./config.js";

import express from "express";
const app = express();

app.set("view engine", "ejs");
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);
app.set("layout extractMetas", true);

if(NODE_ENV == "development") app.set("json spaces", 4);
app.set("x-powered-by", false);

import router from "./routes/index.js";
app.use(router);

app.listen(PORT, () => {
    console.log(
		"Listening on %s\nStarting at %s pacific time\nRunning '%s' version",
		NODE_ENV == "production" ? `port ${PORT}` : `http://localhost:${PORT}`,
		new Date().toLocaleString("en-US", {timeZone: SERVER_TIME_ZONE}),
		NODE_ENV
	);
});