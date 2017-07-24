
const players = [];
const events = {};

window.onYouTubeIframeAPIReady = () =>
  $(".play").forEach(el =>
    el.addEventListener("click", () => {
      const data = Object.assign({}, el.dataset);
      data.player = new YT.Player(el, {
        videoId: data.youtubeId,
        playerVars: {autoplay: 1},
        events
      });
      players.push(data);
    })
  );