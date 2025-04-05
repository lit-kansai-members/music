import SweetScroll from "sweet-scroll";
const sweetScroll = new SweetScroll();

window.onYouTubeIframeAPIReady = () => {
  let playing;
  const isMobile = /.+(ipad|iphone|ipod|android|phone).+/.test(
    navigator.userAgent.toLowerCase()
  );

  const $toggleButton = document.querySelector(".controller .toggle");
  const $backButton = document.querySelector(".controller .back");
  const $nextButton = document.querySelector(".controller .next");
  const $title = document.querySelector(".playing .title");
  const $author = document.querySelector(".playing .author");
  const $thumbnail = document.querySelector(".playing .thumb");
  const $player = document.querySelector(".player");
  const $toggleSetting = document.querySelector(".toggle-setting");
  const $balloon = document.querySelector(".balloon");
  const $continue = document.querySelector("[name='continue']");
  const $repeat = document.querySelector("[name='repeat']");

  const events = {
    onStateChange({ target, data: state }) {
      if (state === 1) {
        players.forEach((data, index) => {
          if (data.player == null) return;
          if (data.player !== target) {
            data.player.getPlayerState() === 1 && data.player.pauseVideo();
          } else if (!isMobile) {
            playing = index;
            $title.innerText = data.title;
            $author.innerText = data.author;
            $thumbnail.src = `https://img.youtube.com/vi/${data.youtubeId}/0.jpg`;
            $toggleButton.classList.remove("paused");
            $player.classList.add("show");
            const iframe = target.getIframe();
            sweetScroll.toElement(iframe);
          }
        });
      } else if (state === 2) {
        if (players.findIndex(({ player }) => player === target) === playing) {
          $toggleButton.classList.add("paused");
        }
      } else if (state === 0) {
        if ($continue.checked) {
          if (playing !== players.length - 1 || $repeat.checked) playNext();
        } else if ($repeat.checked) {
          play(playing);
        }
      }
    },
  };

  const load = (index) => {
    players[index].player = new YT.Player(players[index].trigger, {
      videoId: players[index].youtubeId,
      playerVars: { autoplay: 1, rel: 0 },
      events,
    });
    delete players[index].trigger;
  };

  const play = (index) => {
    if (players[index].player) {
      players[index].player.seekTo(0, true);
      players[index].player.playVideo();
    } else {
      load(index);
    }
  };

  const playBack = () =>
    play(playing - 1 < 0 ? players.length - 1 : playing - 1);

  const playNext = () => play((playing + 1) % players.length);

  const players = [...document.querySelectorAll(".play")].map(
    (trigger, index) => {
      const data = Object.assign({}, trigger.dataset);
      data.trigger = trigger;
      trigger.addEventListener("click", (e) => load(index));
      return data;
    }
  );
  $toggleButton.addEventListener("click", (e) =>
    players[playing].player[
      $toggleButton.classList.contains("paused") ? "playVideo" : "pauseVideo"
    ]()
  );

  $backButton.addEventListener("click", playBack);
  $nextButton.addEventListener("click", playNext);

  $toggleSetting.addEventListener("click", (e) =>
    $balloon.classList.toggle("opened")
  );

  [$title, $author, $thumbnail].forEach(element => {
    element.addEventListener("click", () => {
      const currentPlayer = players[playing]?.player;
      if (currentPlayer) {
        const iframe = currentPlayer.getIframe();
        sweetScroll.toElement(iframe);
      }
    });
  });
}