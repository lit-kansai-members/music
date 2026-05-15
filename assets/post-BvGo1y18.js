import"./modulepreload-polyfill-B5Qt9EMX.js";const q=document.getElementById("songs-container"),k=document.getElementById("add-song-btn");function y(){var s;const e=document.createElement("div");e.className="song-block",e.style.padding="1rem",e.style.border="1px solid #e2e8f0",e.style.marginBottom="1rem",e.style.borderRadius="8px",e.style.background="#f8fafc",e.innerHTML=`
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
  `,(s=e.querySelector(".del-song-btn"))==null||s.addEventListener("click",()=>{e.remove()}),q.appendChild(e)}y();k.addEventListener("click",y);var u;(u=document.getElementById("post-form"))==null||u.addEventListener("submit",e=>{e.preventDefault();const s=document.getElementById("eventName").value,d=`Add: ${s}`,r=document.getElementById("backgroundUrl").value,t={name:s};r?t.background=r:t.background="";const p=Array.from(document.querySelectorAll(".song-block")).map(l=>{const f=l.querySelector(".s-title").value,g=l.querySelector(".s-author").value,a=l.querySelector(".s-youtube").value,h=l.querySelector(".s-spotify").value,U=l.querySelector(".s-damNum").value,x=l.querySelector(".s-damUrl").value,S=l.querySelector(".s-joyNum").value,j=l.querySelector(".s-joyUrl").value,n=l.querySelector(".s-lyricsUrl").value,N=l.querySelector(".s-songDesc").value;let c="";if(a){const o=a.match(/(?:(?:youtu\.be\/)|(?:v=))([a-zA-Z0-9_-]{11})/);o?c=`//youtu.be/${o[1]}`:c=a}let i="";if(n)try{i=new URL(n).hostname}catch{i="歌詞サイト"}return{title:f||"",author:g||"",description:N||"",spotify:h||"",damNumber:U||"",damUrl:x||"",joyNumber:S||"",joyUrl:j||"",lyricsSiteName:i||"",lyricsUrl:n||"",youtubeUrl:c||""}});t.songs=p;const m=JSON.stringify(t,null,2),b=`${d}

\`\`\`json
${m}
\`\`\`
`,v=`https://github.com/lit-kansai-members/music/issues/new?title=${encodeURIComponent(d)}&labels=New%20Song%20Request&body=${encodeURIComponent(b)}`;window.open(v,"_blank")});
