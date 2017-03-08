$(".play").forEach(el =>
  el.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src=`https://www.youtube.com/embed/${this.dataset.youtubeId}?autoplay=1`;
    iframe.frameborder="0";
    iframe.allowfullscreen = true;
    el.parentElement.appendChild(iframe);
}));
