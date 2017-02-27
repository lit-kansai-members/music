$("#mark").css({
  transform:`translateX(${ $("#loading svg").offset().left - $("#mark").offset().left }px)`
});


const paths = Array.from(document.querySelectorAll("path.first, path.second"));

Promise.resolve()
.then(new Promise(res => window.addEventListener("load", e => res())))
.then(new Promise(res => 
  paths[0].addEventListener("animationiteration", e =>{
    if(!(e.elapsedTime % 4)) res()
})))
.then(new Promise(res =>{
  paths.forEach(el => el.style.animationPlayState="paused")
  const loading = document.getElementById("loading");
  loading.style.opacity = "0";
  loading.addEventListener("transitionend", e => res());
}))
.then(document.body.classList.add("loaded"))

