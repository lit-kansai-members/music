# Life is Tech! BGM
[![Build Status](https://travis-ci.org/lit-kansai-members/music.svg?branch=master)](https://travis-ci.org/lit-kansai-members/music) [![devDependencies Status](https://david-dm.org/lit-kansai-members/music/dev-status.svg)](https://david-dm.org/lit-kansai-members/music?type=dev)

Life is Tech!で使われているBGMのまとめのリポジトリです。  
PRお待ちしています。情報がある方、是非お願いします。  

[Webページ](http://lit-kansai-members.github.io/music/)（[index.yml](./index.yml)から自動生成）  

## こんな曲かかってたよ！
そんな曲をご存知の方は [Google Form](https://goo.gl/forms/VNdvhC37OuRBtWCD3) から提案していただければと思います。

## Contribution
### Life is Tech! BGM におけるContributionのやり方講座

1. Fork
2. Edit
3. Commitをする
4. Pull Request
5. Marge plz! :)

### :warning: WARNING :warning:
- 以下のフォーマットを使用してください

  ```yml
  - year: "2016" # 年 (Stringです！)
    camps:
    - name: "'16 Xmas Camp" # キャンプ名
      background: "img/backgorunds/xmas2016_desktop_yellow.jpg" # 背景画像のURL
      songs:
      - title: "Hey Ho" # 曲名
        author: "SEKAI NO OWARI" # 歌手名
        description: |
          [YouTube](//youtu.be/qfsr0S_QGOU)
          [歌詞(J-Lyric.net)](http://j-lyric.net/artist/a055790/l03c659.html)
        # リンクなど。"|"はYAMLの複数行記法です。
  ```

- メンバーがかけていた曲はこのリポジトリのBGMには **含まれません**
- なるべく動画はYouTubeにしてください。
- YouTubeへのリンクは `[YouTube](//youtu.be/動画ID)` のみ動画を埋め込みます。
- 背景画像が指定されていない場合は Life is Tech! のロゴが表示されます。
- `description` では Markdown 記法が利用できます。HTMLへの変換は [marked](https://github.com/chjj/marked)を使用しています。
- Pull Request を行う前に可能ならばテストを行ってください。

  ```bash
  # yarn をインストールしていない場合は npm i -g yarn でインストールしてください
  yarn
  yarn test
  ```

## Contributors
[@KawakawaRitsuki](//github.com/KawakawaRitsuki)（ごっちゃん！！）  
[@ToukaiAkihiro](//github.com/ToukaiAkihiro)（あきひろ、監督）  
[@ygkn](//github.com/ygkn)（やぎちゃん）  
[@E235-235](//github.com/E235-235)（かっくん）  
[@RinYokoi](//github.com/RinYokoi)（なぽるん,りん）  
[@shoya140](//github.com/shoya140)（しょうさま）  

## Special Thanks
[@sanu22](//github.com/sanu22)（いかさん,いかおじさん）

## 最後に
質問等があれば[@KawakawaRitsuki](//twitter.com/KawakawaRitsuki)まで連絡をいただけると幸いです。  
一応このまとめを始めたっぽい人です。いつの間にか共同リポジトリになってますが笑  
GitHubの使い方が分からない方は、私にキャンプ情報と曲名をリプ飛ばしてもらえば検討/追加しますのでお気軽にどうぞ。  
  
ベイベー！
