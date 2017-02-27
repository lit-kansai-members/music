/**
 * .opened, .full-opened で最適な大きさになるようなCSSを作成して
 * <head> の末尾に追記
 */
const style = document.createElement("style")
let css = "";

Array.from(document.querySelectorAll("#navigations .year"))
.forEach((el, i) => {
  const selector =`#navigations > .year:nth-child(${i + 1})`;
  const children = Array.from(el.childNodes);
  const inneryear = children.find(e => e.classList && e.classList.contains("inneryear"));
  const outerCamp = children.find(e => e.classList && e.classList.contains("outerCamp"));
  css += `
${selector}.opened, ${selector}:hover {
  min-width: ${inneryear.offsetWidth + 2}px;
}`;
  if(outerCamp){
    const camps = Array.from(outerCamp.childNodes).filter(e => e.classList && e.classList.contains("camp"));
    const lastCamp = camps.pop();
    css += `
${selector}.full-opened {
  width: ${outerCamp.offsetWidth + 2}px;
}
${selector}.full-opened .outerCamp {
  height: ${lastCamp.offsetTop + lastCamp.offsetHeight}px;
}
`
  }
})

style.innerHTML = css;
document.head.appendChild(style);

/**
 * hover時に .full-opened をつける
 */

Array.from(document.querySelectorAll(".inneryear, .outerCamp"))
.forEach( v => {
  v.addEventListener("mouseenter", e =>
    v.parentElement.classList.add("full-opened"));
  v.addEventListener("mouseleave", e =>
    v.parentElement.classList.remove("full-opened"));
});

/**
 * マウスカーソルの .inneryaer → .outerCamp 移動時に
 * .outerCampが閉じてしまうのを遅れることで回避
 */

Array.from(document.getElementsByClassName("outerCamp"))
.forEach(outerCamp =>
  outerCamp.addEventListener("transitionend", e=>{
    const year = outerCamp.parentElement;
    if(year.classList.contains("full-opened")) {
      year.style.transitionDelay = "450ms";
      outerCamp.style.transitionDelay = "50ms";
    } else {
      year.style.transitionDelay = "";
      outerCamp.style.transitionDelay = "";
    }
  })
);
