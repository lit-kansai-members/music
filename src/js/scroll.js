const jump = require("jump.js");

$("a.smoothscroll[href^='#']").forEach(v =>
  v.addEventListener("click", e =>{
    const target = e.target.getAttribute("href");
    jump(target === "#" ? document.body : document.getElementById(target.slice(1)));
  })
);
