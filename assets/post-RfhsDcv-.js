import"./modulepreload-polyfill-wMinxHhO.js";var e=document.getElementById(`songs-container`),t=document.getElementById(`add-song-btn`);function n(){let t=document.createElement(`div`);t.className=`song-block`,t.style.padding=`1rem`,t.style.border=`1px solid #e2e8f0`,t.style.marginBottom=`1rem`,t.style.borderRadius=`8px`,t.style.background=`#f8fafc`,t.innerHTML=`
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
  `,t.querySelector(`.del-song-btn`)?.addEventListener(`click`,()=>{t.remove()}),e.appendChild(t)}n(),t.addEventListener(`click`,n),document.getElementById(`post-form`)?.addEventListener(`submit`,e=>{e.preventDefault();let t=document.getElementById(`eventName`).value,n=`Add: ${t}`,r=document.getElementById(`backgroundUrl`).value,i={name:t};r?i.background=r:i.background=``,i.songs=Array.from(document.querySelectorAll(`.song-block`)).map(e=>{let t=e.querySelector(`.s-title`).value,n=e.querySelector(`.s-author`).value,r=e.querySelector(`.s-youtube`).value,i=e.querySelector(`.s-spotify`).value,a=e.querySelector(`.s-damNum`).value,o=e.querySelector(`.s-damUrl`).value,s=e.querySelector(`.s-joyNum`).value,c=e.querySelector(`.s-joyUrl`).value,l=e.querySelector(`.s-lyricsUrl`).value,u=e.querySelector(`.s-songDesc`).value,d=``;if(r){let e=r.match(/(?:(?:youtu\.be\/)|(?:v=))([a-zA-Z0-9_-]{11})/);d=e?`//youtu.be/${e[1]}`:r}let f=``;if(l)try{f=new URL(l).hostname}catch{f=`歌詞サイト`}return{title:t||``,author:n||``,description:u||``,spotify:i||``,damNumber:a||``,damUrl:o||``,joyNumber:s||``,joyUrl:c||``,lyricsSiteName:f||``,lyricsUrl:l||``,youtubeUrl:d||``}});let a=`${n}

\`\`\`json
${JSON.stringify(i,null,2)}
\`\`\`
`,o=`https://github.com/lit-kansai-members/music/issues/new?title=${encodeURIComponent(n)}&labels=New%20Song%20Request&body=${encodeURIComponent(a)}`;window.open(o,`_blank`)});