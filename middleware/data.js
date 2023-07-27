export default (req, res, next) => {
    res.data = {};
    res._render = res.render;
	res.render = (page) => res._render(page, { data: res.data});
    next();
}