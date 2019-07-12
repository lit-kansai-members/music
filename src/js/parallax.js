let scroll = window.pageYOffset;
const getDocumentOffset = e => e.getBoundingClientRect().top + scroll;
let viewportHeight = window.innerHeight;

let $backgrounds = Array.from(document.querySelectorAll(".parallax")).map(
  container => {
    const background = Array.from(container.children).find(
      e => e.classList && e.classList.contains("background")
    );
    return {
      container,
      background
    };
  }
);

const update = e =>
  requestAnimationFrame(() => {
    scroll = window.pageYOffset;
    if (e.type !== "scroll") {
      $backgrounds = $backgrounds.map(value => {
        value.top = getDocumentOffset(value.container);
        value.containerHeight = value.container.offsetHeight;
        value.backgroundHeight = value.background.offsetHeight;
        return value;
      });
      viewportHeight = window.innerHeight;
    }
    let i = 0;
    while (i < $backgrounds.length) {
      const {
        background,
        top,
        containerHeight,
        backgroundHeight
      } = $backgrounds[i];
      const viewportTop = top - scroll;
      if (!(viewportTop < 0 && viewportTop > viewportHeight)) {
        background.style.transform =
          "translateY(" +
          -(
            viewportTop +
            ((viewportHeight - viewportTop) /
              (viewportHeight + containerHeight)) *
              (backgroundHeight - viewportHeight)
          ) +
          "px)";
      }
      i = (i + 1) | 0;
    }
  });

addEventListener("scroll", update);
addEventListener("resize", update);
addEventListener("orientationchange", update);
addEventListener("load", update);
