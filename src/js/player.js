const SweetScroll = require("sweet-scroll");
const sweetScroll = new SweetScroll();

window.onYouTubeIframeAPIReady = () => {
  let playing;
  const isMobile = /.+(ipad|iphone|ipod|android|phone).+/.test(navigator.userAgent.toLowerCase());

  const $toggleButton = $(".controller .toggle")[0];
  const $backButton   = $(".controller .back")[0];
  const $nextButton   = $(".controller .next")[0];
  const $title        = $(".playing .title")[0];
  const $author       = $(".playing .author")[0];
  const $thumbnail    = $(".playing .thumb")[0];
  const $player       = $(".player")[0];
  const $toggleSetting = $(".toggle-setting")[0];
  const $balloon       = $(".balloon")[0];

  const events = {
    onStateChange({target, data: state}){
      if(state === 1) {
        players.forEach((data, index) => {
          if(data.player == null) return;
          if(data.player !== target){
              data.player.getPlayerState() === 1 && data.player.pauseVideo()
            } else if(!isMobile) {
              playing = index;
              $title.innerText = data.title;
              $author.innerText = data.author;
              $thumbnail.src = `https://img.youtube.com/vi/${data.youtubeId}/0.jpg`
              $toggleButton.classList.remove("paused");
              $player.classList.add("show");
              const iframe = target.getIframe();
              const box = iframe.getBoundingClientRect();
              if (box.top <= 0 || box.top >= window.innerHeight)
                sweetScroll.toElement(iframe);
            }
        });
      } else if(state === 2 || state === 0) {
        if(players.findIndex(({player}) => player === target) === playing) {
          $toggleButton.classList.add("paused");
        }
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

  const play = index => {
    if(players[index].player) {
      players[index].player.playVideo();
    } else {
      load(index);
    }
  }

  const players = $(".play").map( (trigger, index) => {
    const data = Object.assign({}, trigger.dataset);
    data.trigger = trigger;
    trigger.addEventListener("click", e => load(index));
    return data;
  });
  $toggleButton.addEventListener("click", e =>
    players[playing].player[$toggleButton.classList.contains("paused") ? "playVideo" : "pauseVideo"]());

  $backButton.addEventListener("click", e =>
    play(playing - 1 < 0 ? players.length - 1 : playing - 1));
  $nextButton.addEventListener("click", e =>
    play((playing + 1) % players.length));

  $toggleSetting.addEventListener("click", e => $balloon.classList.toggle("opened"))
}
