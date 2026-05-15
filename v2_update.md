# LiT! Music V2 技術アップデート・仕様変更報告書

本ドキュメントでは、LiT! Music V2 への移行に伴う技術的な設計変更、廃止・導入された要素について解説します。

---

## 1. 技術スタックの変遷 (V1 vs V2)

| 項目               | V1 (YAML + Parcel) | V2 (JSON + Vite + Lit)                            |
| :----------------- | :----------------- | :------------------------------------------------ |
| **ビルドツール**   | Parcel v1          | **Vite v5** (高速なHMRとモダンなビルド)           |
| **データ形式**     | YAML (`js-yaml`)   | **JSON** (JSネイティブ、パース不要)               |
| **テンプレート**   | Pug                | **Lit (HTML-in-JS)**                              |
| **CSS**            | SASS               | **Vanilla CSS + Lit CSS** (ネイティブCSS変数活用) |
| **言語**           | JavaScript         | **TypeScript** (静的型付けによる堅牢性)           |
| **主要パッケージ** | `sweet-scroll`     | **Lit**, **Vite**, **TypeScript**, **Marked**     |

### 📦 廃止・変更したパッケージ

- **`js-yaml`**: データの JSON 化に伴い、外部パーサーが不要になりました。
- **`pug` / `sass`**: Lit コンポーネント内の `html` / `css` テンプレートタグに移行し、JavaScriptによる柔軟なスタイル制御が可能になりました。
- **`parcel-bundler`**: 開発体験とビルドパフォーマンス向上のため、モダンな Vite へ全面移行しました。
- **`sweet-scroll`**: ブラウザ標準の `scrollIntoView` や `scrollTo` への移行により、外部ライブラリへの依存を排除しました。

---

## 2. アーキテクチャと設計思想の変更

### 🏗 コンポーネント設計と状態管理

- **Before**: 楽曲カードが個別に再生状態を持つ「完結型」で、横の連携が困難でした。
- **After**: **Centralized Queue Management**。再生キューとインデックスを Root (`lit-music-app`) で一括管理。
- **Event Orchestration**: Shadow Boundary を越える `Bubbling & Composed Events` を活用し、疎結合ながら統制されたデータ流を実現。

### 🎨 Shadow DOM と外部アセット

- **Before**: グローバルな CSS (FontAwesome等) が Shadow DOM 内に反映されない問題に悩まされていました。
- **After**: **In-Shadow Stylesheet Injection**。各コンポーネント内で個別に `link` タグを用いて CSS を注入し、カプセル化を保ちつつ外部アセットを安定して描画。

### 📂 データ構造の正規化

- **Before**: `index.json` 内にコンテンツとシステムメッセージが混在。
- **After**: **Data Decomposition**。メッセージを `loading.json` へ分離し、関心の分離 (SoC) を徹底。

---

## 3. 高度なフロントエンド・ロジックの導入

- **Runtime Semantic Sorting**: JSON 内の記述順に依存せず、`Autumn / Spring` などの文字列からメタデータを動的に生成してソートするロジックを実装。
- **Reactive UI Flow**: 曲の切り替え（`currentSongIndex` の変化）をリアルタイムに監視し、該当する DOM 要素へスムーススクロールさせる追従機能を実装。
- **Intelligent Rewind**: YouTube IFrame API の `getCurrentTime()` を使用し、再生経過時間に応じた条件分岐（3秒以内なら前曲、以上なら曲頭）をフロントエンド側で制御。

---

## ✒️ 型定義の基本方針 (Year: string)

`EventData` の `year` プロパティを `string` としている理由：

1. **JSON 互換性**: JSON のオブジェクトキーは仕様上すべて文字列であるため、キー情報をそのままユニーク ID やラベルとして扱うのに適しています。
2. **データの多様性**: 数値としての年度だけでなく、「番外編」「Extra」といった文字列データも型エラーなしで許容し、一貫したアルゴリズムで処理できるように設計しています。

---

## 🚀 CI/CD (GitHub Actions) の最適化

- `checkout` および `setup-node` を最新の安定版 (v4) に更新。
- `set-output` の非推奨警告を `$GITHUB_OUTPUT` へ修正し、GitHub Actions の最新仕様に準拠。

---

## 🛠 2026/04/27 追記: master ブランチとのマージおよびコンフリクト解消

- `master` ブランチの最新変更（PR #589 および新規アセット追加）を統合しました。
- **ディレクトリ統合:** V2 での `res/` -> `public/res/` へのディレクトリ移動に伴うツリーコンフリクトを解消。新規アセットを正しいパスへ配置しました。
- **データ同期:** `index.yml` に追加された楽曲データを `src/data/index.json` へ手動で同期・反映。
- **ビルド設定の維持:** `package.json` のコンフリクトを V2 (Vite) 仕様で解消しました。
