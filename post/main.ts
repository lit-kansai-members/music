interface FormSong {
  title: HTMLInputElement;
  author: HTMLInputElement;
  youtubeUrl: HTMLInputElement;
  spotifyUrl: HTMLInputElement;
  damNum: HTMLInputElement;
  joyNum: HTMLInputElement;
  joyUrl: HTMLInputElement;
  lyricsUrl: HTMLInputElement;
  songDesc: HTMLInputElement;
}

const songsContainer = document.getElementById('songs-container')!;
const addSongBtn = document.getElementById('add-song-btn')!;

function createSongField() {
  const wrapper = document.createElement('div');
  wrapper.className = 'song-block';
  wrapper.style.padding = '1rem';
  wrapper.style.border = '1px solid #e2e8f0';
  wrapper.style.marginBottom = '1rem';
  wrapper.style.borderRadius = '8px';
  wrapper.style.background = '#f8fafc';

  wrapper.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
      <h3 style="margin: 0; font-size: 1rem; color: #475569;">曲</h3>
      <button type="button" class="del-song-btn" style="background: transparent; color: #ef4444; border: 1px solid #ef4444; padding: 0.2rem 0.6rem; width: auto; font-size: 0.8rem; margin: 0;">削除</button>
    </div>
    <div class="field">
      <label>曲名 <span style="color:red">*</span></label>
      <input type="text" class="s-title" placeholder="偉星人" required>
    </div>
    <div class="field">
      <label>アーティスト <span class="optional">(任意)</span></label>
      <input type="text" class="s-author" placeholder="Vaundy">
    </div>
    <div class="field-row" style="display:flex; gap:1rem;">
      <div class="field" style="flex:1;">
        <label>YouTube URL <span class="optional">(任意)</span></label>
        <input type="url" class="s-youtube" placeholder="https://youtu.be/xxxxxx">
      </div>
      <div class="field" style="flex:1;">
        <label>Spotify URL <span class="optional">(任意)</span></label>
        <input type="url" class="s-spotify" placeholder="https://open.spotify.com/...">
      </div>
    </div>
    <div class="field-row" style="display:flex; gap:1rem;">
      <div class="field" style="flex:1;">
        <label>DAM カラオケ番号 <span class="optional">(ない場合は空欄でOK)</span></label>
        <input type="text" class="s-damNum" placeholder="1234-56">
      </div>
      <div class="field" style="flex:1;">
        <label>DAM ページURL <span class="optional">(任意)</span></label>
        <input type="url" class="s-damUrl" placeholder="https://www.clubdam.com/...">
      </div>
    </div>
    <div class="field-row" style="display:flex; gap:1rem;">
      <div class="field" style="flex:1;">
        <label>JOYSOUND カラオケ番号 <span class="optional">(ない場合は空欄でOK)</span></label>
        <input type="text" class="s-joyNum" placeholder="123456">
      </div>
      <div class="field" style="flex:1;">
        <label>JOYSOUND ページURL <span class="optional">(任意)</span></label>
        <input type="url" class="s-joyUrl" placeholder="https://www.joysound.com/...">
      </div>
    </div>
    <div class="field">
      <label>歌詞リンク URL <span class="optional">(任意)</span></label>
      <input type="url" class="s-lyricsUrl" placeholder="https://j-lyric.net/...">
    </div>
    <div class="field">
      <label>曲の概要 (Markdown可) <span class="optional">(任意)</span></label>
      <input type="text" class="s-songDesc" placeholder="映画「○○」主題歌">
    </div>
  `;

  wrapper.querySelector('.del-song-btn')?.addEventListener('click', () => {
    wrapper.remove();
  });

  songsContainer.appendChild(wrapper);
}

// Initial song
createSongField();

addSongBtn.addEventListener('click', createSongField);

document.getElementById('post-form')?.addEventListener('submit', (e) => {
  e.preventDefault();

  const eventName = (document.getElementById('eventName') as HTMLInputElement).value;
  const targetIssueTitle = `Add: ${eventName}`;
  const bgUrl = (document.getElementById('backgroundUrl') as HTMLInputElement).value;

  const eventPayload: any = {
    name: eventName,
  };

  if (bgUrl) {
    eventPayload.background = bgUrl;
  } else {
    eventPayload.background = ''; // as user requested: "空白でok"
  }

  const generatedSongs = Array.from(document.querySelectorAll('.song-block')).map((wrapper) => {
    const title = (wrapper.querySelector('.s-title') as HTMLInputElement).value;
    const author = (wrapper.querySelector('.s-author') as HTMLInputElement).value;
    const youtubeUrl = (wrapper.querySelector('.s-youtube') as HTMLInputElement).value;
    const spotifyUrl = (wrapper.querySelector('.s-spotify') as HTMLInputElement).value;
    const damNum = (wrapper.querySelector('.s-damNum') as HTMLInputElement).value;
    const damUrl = (wrapper.querySelector('.s-damUrl') as HTMLInputElement).value;
    const joyNum = (wrapper.querySelector('.s-joyNum') as HTMLInputElement).value;
    const joyUrl = (wrapper.querySelector('.s-joyUrl') as HTMLInputElement).value;
    const lyricsUrl = (wrapper.querySelector('.s-lyricsUrl') as HTMLInputElement).value;
    const extraDesc = (wrapper.querySelector('.s-songDesc') as HTMLInputElement).value;

    let ytBody = '';
    if (youtubeUrl) {
      const ytMatch = youtubeUrl.match(/(?:(?:youtu\.be\/)|(?:v=))([a-zA-Z0-9_-]{11})/);
      if (ytMatch) ytBody = `//youtu.be/${ytMatch[1]}`;
      else ytBody = youtubeUrl;
    }

    let lyricDomain = '';
    if (lyricsUrl) {
      try {
        const urlObj = new URL(lyricsUrl);
        lyricDomain = urlObj.hostname;
      } catch (e) {
        lyricDomain = '歌詞サイト';
      }
    }

    const songObj: any = {
      title: title || '',
      author: author || '',
      description: extraDesc || '',
      spotify: spotifyUrl || '',
      damNumber: damNum || '',
      damUrl: damUrl || '',
      joyNumber: joyNum || '',
      joyUrl: joyUrl || '',
      lyricsSiteName: lyricDomain || '',
      lyricsUrl: lyricsUrl || '',
      youtubeUrl: ytBody || '',
    };

    return songObj;
  });

  eventPayload.songs = generatedSongs;

  const jsonStr = JSON.stringify(eventPayload, null, 2);

  const body = `${targetIssueTitle}

\`\`\`json
${jsonStr}
\`\`\`
`;

  const issueUrl = `https://github.com/lit-kansai-members/music/issues/new?title=${encodeURIComponent(targetIssueTitle)}&labels=New%20Song%20Request&body=${encodeURIComponent(body)}`;

  window.open(issueUrl, '_blank');
});
