import LazyLoad from "./lib/vanilla-lazyload.js";

new LazyLoad({
    elements_selector: "#content > video",
    unobserve_entered: true
});
