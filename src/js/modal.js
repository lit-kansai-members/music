$(".close-modal").forEach(v =>
  v.addEventListener("click", e => {
    document.body.style.overflow = "";
    e.preventDefault();
    $(".modal.open").forEach(v => v.classList.remove("open"));
  })
);

$(".open-modal").forEach(v =>
  v.addEventListener("click", e => {
    document.body.style.overflow = "hidden";
    e.preventDefault();
    document
      .getElementById(v.getAttribute("href").slice(1))
      .classList.add("open");
  })
);

const $modals = $(".modal");

window.addEventListener(
  "keydown",
  ({ key }) =>
    key === "Escape" && $modals.forEach(modal => modal.classList.remove("open"))
);
