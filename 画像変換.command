#!/bin/bash
# ============================================================
#  キービジュ画像 リネーム & WebP変換スクリプト
# ------------------------------------------------------------
#  ※ LiT! Music 掲載用のファイル名生成に対応しています。
#     対応イベントは「キャンプ」「卒業サプライズ」のみです。
#     それ以外のイベント用ファイル名には対応していません。
#
#  やること:
#    1. キービジュ画像を選択（Finderダイアログ）
#    2. 長辺を1920pxに強制リサイズ
#    3. WebP形式に変換
#    4. 質問に答えて命名規則どおりのファイル名を自動生成
#         例) camp_2018_spring.webp
#             event_2024_surprise_kansai.webp
#    5. 保存先フォルダを選択して保存
#
#  必要なもの: Homebrew + ImageMagick
#    （未インストールの場合は自動で案内・インストールします）
# ============================================================

# --- スクリプトが置かれているディレクトリに関係なく動くようにする ---
cd "$(dirname "$0")" 2>/dev/null

# --- Ctrl+C 等で中断された場合のメッセージ ---
trap 'echo ""; echo "⚠️  処理を中断しました。"; pause_and_exit 1' INT TERM

# --- 終了時に必ずウィンドウを閉じずキー入力待ちにする関数 ---
pause_and_exit () {
    local code="${1:-0}"
    echo ""
    read -p "何かキーを押すとウィンドウを閉じます..." _dummy
    exit "$code"
}

echo "============================================================"
echo " キービジュ画像 リネーム & WebP変換スクリプト"
echo " 対応イベント: キャンプ / 卒業サプライズ のみ"
echo "============================================================"
echo ""

# ------------------------------------------------------------
# 0. ImageMagick の確認・インストール
# ------------------------------------------------------------
IM_CMD=""

if command -v magick >/dev/null 2>&1; then
    IM_CMD="magick"
elif command -v convert >/dev/null 2>&1; then
    IM_CMD="convert"
fi

if [ -z "$IM_CMD" ]; then
    echo "🔍 ImageMagick が見つかりませんでした。"
    if command -v brew >/dev/null 2>&1; then
        echo "   Homebrew は入っているようです。"
        read -p "   'brew install imagemagick' を今すぐ実行してよろしいですか？ [y/N]: " ans
        case "$ans" in
            y|Y)
                echo "📦 インストール中です。少々お待ちください..."
                if brew install imagemagick; then
                    echo "✅ インストールが完了しました。"
                else
                    echo "❌ インストールに失敗しました。手動で 'brew install imagemagick' を実行してから、再度このスクリプトを実行してください。"
                    pause_and_exit 1
                fi
                ;;
            *)
                echo "❌ ImageMagick がないと処理を続けられません。インストール後にもう一度実行してください。"
                pause_and_exit 1
                ;;
        esac
    else
        echo "❌ Homebrew も見つかりませんでした。"
        echo "   以下を参考に Homebrew をインストールしてから、"
        echo "   'brew install imagemagick' を実行してください。"
        echo "   https://brew.sh"
        pause_and_exit 1
    fi

    # 再チェック
    if command -v magick >/dev/null 2>&1; then
        IM_CMD="magick"
    elif command -v convert >/dev/null 2>&1; then
        IM_CMD="convert"
    else
        echo "❌ インストール後も ImageMagick が見つかりません。ターミナルを再起動してから、もう一度お試しください。"
        pause_and_exit 1
    fi
fi

echo "✅ ImageMagick が使用可能です（コマンド: $IM_CMD）"
echo ""

# ------------------------------------------------------------
# 1. キービジュ画像を選択
# ------------------------------------------------------------
echo "🖼  キービジュ画像を選択してください（ダイアログが開きます）..."

SRC_FILE=$(osascript -e 'try
    POSIX path of (choose file with prompt "キービジュ画像を選択してください" of type {"public.image"})
on error
    return "CANCELLED"
end try' 2>/dev/null)

if [ -z "$SRC_FILE" ] || [ "$SRC_FILE" = "CANCELLED" ]; then
    echo "❌ 画像が選択されませんでした。処理を中止します。"
    pause_and_exit 1
fi

if [ ! -f "$SRC_FILE" ]; then
    echo "❌ 選択されたファイルが見つかりません: $SRC_FILE"
    pause_and_exit 1
fi

echo "✅ 選択された画像: $SRC_FILE"
echo ""

# ------------------------------------------------------------
# 2. Q1. キャンプ？卒業サプライズ？
# ------------------------------------------------------------
echo "Q1. どちらのイベントですか？"
PS3="番号を選んでください（1 or 2）: "
select opt in "キャンプ" "卒業サプライズ"; do
    case "$REPLY" in
        1) EVENT_TYPE="camp"; break ;;
        2) EVENT_TYPE="event"; break ;;
        *) echo "⚠️  1か2の番号を入力してください。" ;;
    esac
done
echo ""

# ------------------------------------------------------------
# 3. Q2. 何年？
# ------------------------------------------------------------
while true; do
    read -p "Q2. 開催年を4桁で入力してください（例: 2026）: " YEAR
    if [[ "$YEAR" =~ ^[0-9]{4}$ ]]; then
        break
    else
        echo "⚠️  4桁の数字で入力してください（例: 2026）"
    fi
done
echo ""

# ------------------------------------------------------------
# 4. Q3. キャンプ名 or 地域
# ------------------------------------------------------------
if [ "$EVENT_TYPE" = "camp" ]; then
    echo "Q3. キャンプ名は？"
    PS3="番号を選んでください（1〜3）: "
    select season in "Spring" "Summer" "Xmas"; do
        case "$REPLY" in
            1) SUFFIX="spring"; break ;;
            2) SUFFIX="summer"; break ;;
            3) SUFFIX="xmas"; break ;;
            *) echo "⚠️  1〜3の番号を入力してください。" ;;
        esac
    done
    FILENAME="camp_${YEAR}_${SUFFIX}.webp"
else
    echo "Q3. （卒業サプライズなら）地域は？"
    PS3="番号を選んでください（1 or 2）: "
    select area in "関西" "関東"; do
        case "$REPLY" in
            1) SUFFIX="kansai"; break ;;
            2) SUFFIX="kanto"; break ;;
            *) echo "⚠️  1か2の番号を入力してください。" ;;
        esac
    done
    FILENAME="event_${YEAR}_surprise_${SUFFIX}.webp"
fi

# 念のため全て小文字化（既に小文字だが二重チェック）
FILENAME=$(echo "$FILENAME" | tr '[:upper:]' '[:lower:]')

echo ""
echo "📝 生成されるファイル名: $FILENAME"
echo ""

# ------------------------------------------------------------
# 5. 保存先フォルダを選択
# ------------------------------------------------------------
echo "📁 保存先フォルダを選択してください（ダイアログが開きます）..."

DEST_DIR=$(osascript -e 'try
    POSIX path of (choose folder with prompt "保存先フォルダを選択してください")
on error
    return "CANCELLED"
end try' 2>/dev/null)

if [ -z "$DEST_DIR" ] || [ "$DEST_DIR" = "CANCELLED" ]; then
    echo "❌ 保存先が選択されませんでした。処理を中止します。"
    pause_and_exit 1
fi

# 末尾のスラッシュを除去
DEST_DIR="${DEST_DIR%/}"

if [ ! -d "$DEST_DIR" ]; then
    echo "❌ 保存先フォルダが見つかりません: $DEST_DIR"
    pause_and_exit 1
fi

if [ ! -w "$DEST_DIR" ]; then
    echo "❌ 保存先フォルダに書き込み権限がありません: $DEST_DIR"
    pause_and_exit 1
fi

DEST_FILE="${DEST_DIR}/${FILENAME}"

if [ -e "$DEST_FILE" ]; then
    echo "⚠️  同名のファイルが既に存在します: $DEST_FILE"
    read -p "   上書きしてもよろしいですか？ [y/N]: " ow
    case "$ow" in
        y|Y) : ;;
        *) echo "❌ 処理を中止しました。"; pause_and_exit 1 ;;
    esac
fi

echo ""

# ------------------------------------------------------------
# 6. リサイズ & WebP変換
# ------------------------------------------------------------
echo "🔄 画像を変換しています（長辺1920px / WebP）..."

if [ "$IM_CMD" = "magick" ]; then
    magick "$SRC_FILE" -resize "1920x1920" "$DEST_FILE"
    CONVERT_STATUS=$?
else
    convert "$SRC_FILE" -resize "1920x1920" "$DEST_FILE"
    CONVERT_STATUS=$?
fi

if [ $CONVERT_STATUS -ne 0 ]; then
    echo "❌ 変換に失敗しました。元画像が壊れているか、対応していない形式の可能性があります。"
    pause_and_exit 1
fi

if [ ! -f "$DEST_FILE" ]; then
    echo "❌ 変換後のファイルが見つかりません。保存に失敗した可能性があります。"
    pause_and_exit 1
fi

echo ""
echo "✅ 完了しました！"
echo "   保存先: $DEST_FILE"
echo ""
echo "ℹ️  このファイル名は LiT! Music 掲載用の命名規則に沿っています。"
echo "   （対応イベントは「キャンプ」「卒業サプライズ」のみです）"

pause_and_exit 0
