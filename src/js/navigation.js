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
  const inneryear = Array.from(children
    .find(e => e.tagName === "A")
    .childNodes)
    .find(e => e.classList && e.classList.contains("inneryear"));
  const outerCamp = children.find(e => e.classList && e.classList.contains("outerCamp"));
  css += `
${selector}.opened, ${selector}:hover {
  --width: ${inneryear.offsetWidth + 2}px;
}`;
  if(outerCamp){
    const camps = Array.from(outerCamp.childNodes)
      .filter(e => e.classList && e.classList.contains("camp"));
    const lastCamp = camps.pop();
    css += `
${selector}.full-opened {
  --width: ${outerCamp.offsetWidth + 2}px;
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
  const year = (v.classList.contains("inneryear") ? v.parentElement : v).parentElement;
  v.addEventListener("mouseenter", e => year.classList.add("full-opened"));
  v.addEventListener("mouseleave", e => year.classList.remove("full-opened"));
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

/**
 * TOPがウィンドウの高さの半分以上の最後の要素を開く
 */

const years = Array.from(document.querySelectorAll("header, main > h2 ,footer")).reverse();

const yearNavs = Array.from(document.querySelectorAll("#navigations > .year")).reverse();

let opened = 0;

window.addEventListener("scroll", e =>{
  const VHHalf = window.innerHeight / 2;
  let open = years.findIndex(e => e.getBoundingClientRect().top < VHHalf);
  open = ~open ? open : years.length - 1;
  if(open !== opened) {
    yearNavs[opened].classList.remove("opened");
    yearNavs[open].classList.add("opened");
    opened = open;
  }
});
