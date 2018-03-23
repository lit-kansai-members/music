const words = [
  'なんと！　ななんと！　なななんと！',
  'Life is Tech ! は気が利くので〜',
  'さっすが～ 知らなかった～ すっご～い センスあるね そ～なんだ～',
  'おおっ！？',
  "I'm a 注意点 Human.",
  '探さない、待つの。',
  '勝手に水分摂らないで',
  '①かわく ②疲れる ③おひるま眠る ④深夜に目覚める ⑤いなくなる'
];

const length = words.length;
const index = Math.floor(Math.random() * length);

document.getElementById('loading-message').innerText =
  words[index >= length ? length - 1 : index];
console.log(words[index >= length ? length - 1 : index]);
