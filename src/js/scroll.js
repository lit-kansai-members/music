const SweetScroll = require("sweet-scroll");

const scroll = new SweetScroll({trigger: "[data-scroll]:not(.bounce)"});
const scrollBounce = new SweetScroll({trigger: "[data-scroll].bounce", easing: "easeOutBack"});

