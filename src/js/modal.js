document.querySelectorAll(".close-modal").forEach(v =>
  v.addEventListener("click", e => {
    document.body.style.overflow = "";
    e.preventDefault();
    document
      .querySelectorAll(".modal.open")
      .forEach(v => v.classList.remove("open"));
  })
);

document.querySelectorAll(".open-modal").forEach(v =>
  v.addEventListener("click", e => {
    document.body.style.overflow = "hidden";
    e.preventDefault();
    document
      .getElementById(v.getAttribute("href").slice(1))
      .classList.add("open");
  })
);

const $modals = document.querySelectorAll(".modal");

window.addEventListener(
  "keydown",
  ({ key }) =>
    key === "Escape" && $modals.forEach(modal => modal.classList.remove("open"))
);
