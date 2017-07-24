
const players = [];
const events = {
  onStateChange({target, data: state}){
    if(state === 1) {
      players.forEach(({player}) =>
        player !== target && player.getPlayerState() === 1 && player.pauseVideo()
      );
    }
  }
};

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