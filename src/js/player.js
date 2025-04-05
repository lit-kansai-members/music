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

  const ERROR_CODES = {
    2: "無効なパラメータ値",
    5: "HTML5プレイヤーエラー",
    100: "動画が見つからないか削除された",
    101: "埋め込み再生が許可されていない",
    150: "埋め込み再生が許可されていない"
  };

  const events = {
    onReady(event) {
      const target = event.target;
      const index = players.findIndex(({ player }) => player === target);
      
      if (index !== -1) {
        console.log(`Video ${index} (${players[index].youtubeId}) is ready`);
        // 動画の状態をチェックする
        checkVideoPlayability(target, index);
        // 再生開始タイムアウトを設定
        players[index].loadTimeout = setTimeout(() => {
          checkVideoPlayability(target, index);
        }, 3000);
      }
    },
    
    onStateChange({ target, data: state }) {
      const index = players.findIndex(({ player }) => player === target);
      
      // タイムアウトをクリア（正常に状態が変化した）
      if (index !== -1 && players[index].loadTimeout) {
        clearTimeout(players[index].loadTimeout);
        players[index].loadTimeout = null;
      }
      
      if (state === YT.PlayerState.PLAYING) { // 1
        players.forEach((data, idx) => {
          if (data.player == null) return;
          if (data.player !== target) {
            data.player.getPlayerState() === YT.PlayerState.PLAYING && data.player.pauseVideo();
          } else if (!isMobile) {
            playing = idx;
            $title.innerText = data.title;
            $author.innerText = data.author;
            $thumbnail.src = `https://img.youtube.com/vi/${data.youtubeId}/0.jpg`;
            $toggleButton.classList.remove("paused");
            $player.classList.add("show");
            const iframe = target.getIframe();
            sweetScroll.toElement(iframe);
          }
        });
      } else if (state === YT.PlayerState.PAUSED) { // 2
        if (index === playing) {
          $toggleButton.classList.add("paused");
        }
      } else if (state === YT.PlayerState.ENDED) { // 0
        if ($continue.checked) {
          if (playing !== players.length - 1 || $repeat.checked) playNext();
        } else if ($repeat.checked) {
          play(playing);
        }
      } else if (state === YT.PlayerState.UNSTARTED) { // -1
        // 未開始状態が続く場合もチェック
        if (index === playing) {
          setTimeout(() => {
            // 3秒後もまだUNSTARTEDならエラーと見なす
            if (target.getPlayerState() === YT.PlayerState.UNSTARTED) {
              console.log(`Video at index ${index} stuck in UNSTARTED state, skipping...`);
              if ($continue.checked) playNext();
            }
          }, 3000);
        }
      }
    },
    
    onError({ target, data: errorCode }) {
      const index = players.findIndex(({ player }) => player === target);
      
      if (index !== -1) {
        console.error(`Error playing video at index ${index}: ${ERROR_CODES[errorCode] || `Unknown error (${errorCode})`}`);
        
        // エラー発生時にタイムアウトをクリア
        if (players[index].loadTimeout) {
          clearTimeout(players[index].loadTimeout);
          players[index].loadTimeout = null;
        }
        
        // 現在再生中の動画でエラーが発生した場合に次へ
        if (index === playing && $continue.checked) {
          playNext();
        }
      }
    }
  };

  // 動画が再生可能かどうかを積極的にチェック
  const checkVideoPlayability = (player, index) => {
    if (!player) return;
    
    try {
      const duration = player.getDuration();
      const state = player.getPlayerState();
      
      // 動画の再生が不可能な状態を検出
      if (
        (duration <= 0 && state !== YT.PlayerState.BUFFERING) || 
        state === YT.PlayerState.UNSTARTED || 
        state === -1
      ) {
        console.log(`Video at index ${index} seems unplayable (state: ${state}, duration: ${duration})`);
        
        // 特定の条件での追加チェック
        player.playVideo();
        
        // 再度確認するための短いタイムアウト
        setTimeout(() => {
          const newState = player.getPlayerState();
          const newDuration = player.getDuration();
          
          if (
            (newDuration <= 0 && newState !== YT.PlayerState.BUFFERING) || 
            newState === YT.PlayerState.UNSTARTED || 
            newState === -1
          ) {
            console.log(`Confirmed video at index ${index} is unplayable, skipping...`);
            if (index === playing && $continue.checked) {
              playNext();
            }
          }
        }, 1000);
      }
    } catch (error) {
      console.error(`Error checking video at index ${index}:`, error);
      if (index === playing && $continue.checked) {
        playNext();
      }
    }
  };

  const load = (index) => {
    try {
      // すでにトリガー要素が置き換えられている場合は再作成
      if (!players[index].trigger && !players[index].player) {
        console.error(`Cannot load player at index ${index}: Trigger element is gone`);
        if ($continue.checked && index === playing) {
          setTimeout(playNext, 500);
        }
        return;
      }
      
      players[index].player = new YT.Player(players[index].trigger, {
        videoId: players[index].youtubeId,
        playerVars: { 
          autoplay: 1, 
          rel: 0,
          enablejsapi: 1
        },
        events: events
      });
      
      delete players[index].trigger;
    } catch (error) {
      console.error(`Failed to create player for index ${index}:`, error);
      if ($continue.checked && index === playing) {
        setTimeout(playNext, 500);
      }
    }
  };

  const play = (index) => {
    // 前の動画のタイムアウトをクリア
    if (playing !== undefined && players[playing] && players[playing].loadTimeout) {
      clearTimeout(players[playing].loadTimeout);
      players[playing].loadTimeout = null;
    }
    
    if (index < 0 || index >= players.length) {
      console.error(`Invalid index ${index}`);
      return;
    }
    
    if (players[index].player) {
      try {
        playing = index;
        players[index].player.seekTo(0, true);
        players[index].player.playVideo();
        
        // 再生開始を確認するためのタイムアウト
        players[index].loadTimeout = setTimeout(() => {
          if (players[index].player) {
            checkVideoPlayability(players[index].player, index);
          }
        }, 3000);
      } catch (error) {
        console.error(`Error playing video at index ${index}:`, error);
        if ($continue.checked) {
          playNext();
        }
      }
    } else {
      playing = index;
      load(index);
    }
  };

  const playBack = () => {
    play(playing - 1 < 0 ? players.length - 1 : playing - 1);
  };

  const playNext = () => {
    if (players.length <= 1) return;
    
    const startIndex = playing !== undefined ? playing : 0;
    let nextIndex = (startIndex + 1) % players.length;
    let attempts = 0;
    
    const tryPlay = () => {
      if (attempts >= players.length) {
        console.warn("Tried all videos but none are playable");
        return;
      }
      
      attempts++;
      play(nextIndex);
    };
    
    tryPlay();
  };

  const players = [...document.querySelectorAll(".play")].map(
    (trigger, index) => {
      const data = Object.assign({}, trigger.dataset);
      data.trigger = trigger;
      data.loadTimeout = null;
      trigger.addEventListener("click", (e) => load(index));
      return data;
    }
  );
  
  $toggleButton.addEventListener("click", (e) => {
    if (playing !== undefined && players[playing].player) {
      players[playing].player[
        $toggleButton.classList.contains("paused") ? "playVideo" : "pauseVideo"
      ]();
    }
  });

  $backButton.addEventListener("click", playBack);
  $nextButton.addEventListener("click", playNext);

  $toggleSetting.addEventListener("click", (e) =>
    $balloon.classList.toggle("opened")
  );
};