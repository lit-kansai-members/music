const $mark = document.getElementById("mark");

// move mark to center of viewport.
$mark.style.transform = `translateX(${
  window.innerWidth / 2 -
  document.querySelector("#mark").getBoundingClientRect().left
}px) translateX(-50%)`;
$mark.style.transition = "1s";

const paths = Array.from(document.querySelectorAll("path.first, path.second"));

Promise.resolve()
  .then(
    () => new Promise((res) => window.addEventListener("load", (e) => res()))
  )
  .then(
    () =>
      new Promise((res) => {
        setTimeout(() => res(), 2000);
      })
  )
  .then(
    () =>
      new Promise((res) => {
        paths.forEach((el) => (el.style.animationPlayState = "paused"));
        const loading = document.getElementById("loading");
        loading.style.opacity = "0";
        loading.addEventListener("transitionend", () => res());
      })
  )
  .then(() => document.body.classList.add("loaded"));
