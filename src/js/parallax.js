const $backgrounds = Array
  .from(document.querySelectorAll(".parallax"))
  .map(container => ({
    container,
    background: Array.from(container.childNodes)
      .find(e => e.classList && e.classList.contains("background"))})
   );
 
const anim = () =>{
  requestAnimationFrame(anim);
  const viewportHeight = window.innerHeight;
  let i = 0;
  while( i < $backgrounds.length){
    const {background, container} = $backgrounds[i];
    const scroll = -container.getBoundingClientRect().top;
    background.style.transform = "translateY(" + 
      (scroll - (scroll + viewportHeight) / (viewportHeight + container.offsetHeight) * (background.offsetHeight - viewportHeight)) +
    "px)";
    i = (i+1) | 0;
  }
}

anim();
