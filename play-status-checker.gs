function checkYouTubeVideos() {
  const jsonUrl =
    'https://raw.githubusercontent.com/lit-kansai-members/music/refs/heads/main/src/data/index.json';
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('data');

  // スプレッドシートのヘッダー設定
  sheet.clearContents();
  sheet.appendRow([
    '年',
    'イベント名',
    '曲名',
    'アーティスト',
    'YouTube',
    'ステータス',
    'チェック日時',
  ]);

  try {
    // JSONファイルを取得
    const response = UrlFetchApp.fetch(jsonUrl);
    const data = JSON.parse(response.getContentText());

    let videoResults = [];
    let hasUnavailableVideos = false;

    const categories = ['camp', 'school', 'event'];

    for (const category of categories) {
      if (!data[category]) continue;

      const yearsObj = data[category];
      for (const year in yearsObj) {
        const events = yearsObj[year];

        for (const campEvent of events) {
          const campName = campEvent.name;

          for (const song of campEvent.songs) {
            const title = song.title;
            const author = song.author || '';

            // YouTube URLを抽出 (descriptionやyoutubeIdから)
            let videoId = null;

            if (song.youtubeId) {
              videoId = song.youtubeId;
            } else if (song.description) {
              const youtubeMatch = song.description.match(/\[YouTube\]\(\/\/youtu\.be\/(.+?)\)/);
              if (youtubeMatch) {
                videoId = youtubeMatch[1];
              }
            }

            if (!videoId) continue;

            const youtubeUrl = `https://youtu.be/${videoId}`;

            // 動画が再生可能かチェック
            const isAvailable = checkVideoAvailability(videoId);

            if (!isAvailable) {
              hasUnavailableVideos = true;
            }

            videoResults.push([
              year,
              campName,
              title,
              author,
              youtubeUrl,
              isAvailable ? '✅ 再生可能' : '❌ 再生不可',
              new Date().toLocaleString('ja-JP'),
            ]);
          }
        }
      }
    }

    // 結果をスプレッドシートに出力
    if (videoResults.length > 0) {
      sheet.getRange(2, 1, videoResults.length, videoResults[0].length).setValues(videoResults);
    }

    // スクリプトプロパティに最新の状態を保存
    PropertiesService.getScriptProperties().setProperty(
      'hasUnavailableVideos',
      hasUnavailableVideos.toString()
    );
    PropertiesService.getScriptProperties().setProperty('lastCheckTime', new Date().toISOString());

    Logger.log(
      `${videoResults.length}件の動画をチェックしました。再生不可の動画: ${hasUnavailableVideos ? 'あり' : 'なし'}`
    );

    return hasUnavailableVideos ? 'Error' : 'OK';
  } catch (error) {
    Logger.log('エラーが発生しました: ' + error.toString());
    sheet.getRange(2, 1).setValue('エラーが発生しました: ' + error.toString());

    // エラー発生時もプロパティを更新
    PropertiesService.getScriptProperties().setProperty('hasUnavailableVideos', 'true');
    PropertiesService.getScriptProperties().setProperty('lastCheckTime', new Date().toISOString());
    PropertiesService.getScriptProperties().setProperty('lastError', error.toString());

    return 'Error';
  }
}

/**
 * YouTube Data APIを使用して動画が再生可能かチェックする
 * @param {string} videoId - YouTubeの動画ID
 * @return {boolean} - 動画が再生可能な場合はtrue、それ以外はfalse
 */
function checkVideoAvailability(videoId) {
  try {
    // YouTube Data APIのAPIキーが必要です
    // スクリプトプロパティまたは環境変数から取得することをお勧めします
    const API_KEY = PropertiesService.getScriptProperties().getProperty('YOUTUBE_API_KEY');

    if (!API_KEY) {
      console.error(
        'YOUTUBE_API_KEY is not configured in Script Properties. Skipping YouTube status check.'
      );
      return true; // Assume available or throw error
    }

    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=status`;
    const response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
    if (response.getResponseCode() !== 200) {
      console.error(
        `YouTube API returned error ${response.getResponseCode()}: ${response.getContentText()}`
      );
      return true;
    }
    const data = JSON.parse(response.getContentText());

    // 動画が存在し、embedable（埋め込み可能）であれば再生可能と判断
    if (data.items && data.items.length > 0) {
      const status = data.items[0].status;
      return status.uploadStatus === 'processed' && status.embeddable === true;
    }

    return false;
  } catch (error) {
    Logger.log('動画のチェック中にエラーが発生: ' + error.toString());
    return false;
  }
}

/**
 * Web APIとして公開するためのdoGet関数
 * @param {Object} e - リクエストパラメータ
 * @return {Object} - JSONレスポンス
 */
function doGet(e) {
  // 最新のステータスをスクリプトプロパティから取得
  let playStatus = 'OK';

  // チェックを強制実行するパラメータがあれば実行
  if (e && e.parameter && e.parameter.forceCheck === 'true') {
    playStatus = checkYouTubeVideos();
  } else {
    // 保存されたステータスを取得
    const hasUnavailableVideos =
      PropertiesService.getScriptProperties().getProperty('hasUnavailableVideos');

    // 未チェックまたは再生不可の動画がある場合はErrorを返す
    if (hasUnavailableVideos === 'true') {
      playStatus = 'Error';
    }
  }

  // JSONレスポンスを返す
  const response = JSON.stringify({
    PlayStatus: playStatus,
  });

  return ContentService.createTextOutput(response).setMimeType(ContentService.MimeType.JSON);
}
