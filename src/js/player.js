window.onYouTubeIframeAPIReady = () => {
  let playing;
  const isMobile = /.+(ipad|iphone|ipod|android|phone).+/.test(navigator.userAgent.toLowerCase());
  const events = {
    onStateChange({target, data: state}){
      if(state === 1) {
        players.forEach((data, index) => {
          if(data.player == null) return;
          if(data.player !== target){
              data.player.getPlayerState() === 1 && data.player.pauseVideo()
            } else if(!isMobile) {
              playing = index;
              $(".playing .title")[0].innerText = data.title;
              $(".playing .author")[0].innerText = data.author;
              $(".playing .thumb")[0].src = `https://img.youtube.com/vi/${data.youtubeId}/0.jpg`
              $(".player")[0].classList.add("show");
            }
        });
      }
    }
  };

  const load = index => {
    players[index].player = new YT.Player(players[index].trigger, {
      videoId: players[index].youtubeId,
      playerVars: {autoplay: 1},
      events
    });
    delete players[index].trigger;
  }

  const players = $(".play").map( (trigger, index) => {
    const data = Object.assign({}, trigger.dataset);
    data.trigger = trigger;
    trigger.addEventListener("click", e => load(index));
    return data;
  });
  $(".controller .toggle")[0].addEventListener("click", () => players[playing].player.playVideo());
}
