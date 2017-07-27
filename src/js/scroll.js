const SweetScroll = require("sweet-scroll");

const afterScroll = (toScroll, trigger) =>
  location.hash = trigger.hash.slice(1);

const scroll = new SweetScroll({trigger: "[data-scroll]:not(.bounce)", afterScroll});
const scrollBounce = new SweetScroll({trigger: "[data-scroll].bounce", easing: "easeOutBack", afterScroll});
