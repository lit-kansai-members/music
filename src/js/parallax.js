const getDocumentOffset = e => e.getBoundingClientRect().top + pageYOffset;
const viewportHeight = window.innerHeight;

let scrollY;
let $backgrounds = Array
  .from(document.querySelectorAll(".parallax"))
  .map(container => {
    const background = Array.from(container.children)
      .find(e => e.classList && e.classList.contains("background"));
    return ({
      container,
      background,
      top: getDocumentOffset(container),
      containerHeight: container.offsetHeight,
      backgroundHeight: background.offsetHeight
    })
  });

window.addEventListener("resize", e =>{
  $backgrounds = $backgrounds.map(value => {
    value.top = getDocumentOffset(value.container);
    value.containerHeight = value.container.offsetHeight;
    value.backgroundHeight = value.background.offsetHeight;
    return value;
  })
  viewportHeight = window.innerHeight;
})

window.addEventListener("scroll", e => scrollY = pageYOffset);
 
const anim = () =>{
  let i = 0;
  while( i < $backgrounds.length){
    const {background, top, containerHeight, backgroundHeight} = $backgrounds[i];
    const viewportTop = top - scrollY;
    if(!(viewportTop < 0 && viewportTop > viewportHeight)) {
      background.style.transform = "translateY(" + 
        -(viewportTop + (viewportHeight - viewportTop) / (viewportHeight + containerHeight) * (backgroundHeight - viewportHeight)) +
      "px)";
    }
    i = (i+1) | 0;
  }
  requestAnimationFrame(anim);
}

anim();
