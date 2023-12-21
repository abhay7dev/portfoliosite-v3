import { year, url } from "../config.js";

export default (req, res, next) => {
    res.data = { year, url };
    res._render = res.render;
	res.render = (page) => res._render(page, { data: res.data });
    next();
}