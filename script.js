/**
 * ==========================================
 * 【設定・データエリア】
 * 今後、別のフェスや別年度に流用する場合は、
 * HTMLやCSSを一切触らず、この APP_CONFIG とデータだけを書き換えてください。
 * ==========================================
 */

// --- 1. アプリケーション全体の設定 ---
const APP_CONFIG = {
    festivalName: "hoshioto'26<br>非公式アプリ",
    officialUrl: "https://hoshioto.net/",
    storagePrefix: "hoshioto_2026_", 
    startHour: 9, 
    endHour: 33,  // 深夜32:00（翌朝8:00）までカバーするため
    days: [
        { id: 'day1', label: '1日目' } // 日程指定がないため1日想定
    ],
    mapImages: [
        // 必要に応じてマップ画像のURLを設定してください
    ],
    weather: {
        areaName: "岡山県井原市青野町周辺の天気",
        iframeUrl: "https://weathernews.jp/onebox/tenki/okayama/33207/", // 井原市周辺のダミーURLです
        linkUrl: "https://weathernews.jp/onebox/tenki/okayama/33207/"
    },
    source: {
        text: "出典：hoshioto",
        url: "https://hoshioto.net/"
    },
    settings: {
        priorityStageOrder: true
    },
    ui: {
        officialLinkText: "<span class='small-text'>公式</span>HP",
        disclaimer: "※各アーティストのジャンルはAIによる判定です。<br>※最新情報は公式HPで確認してください。",
        searchPlaceholder: "出演アーティストを検索（前方一致）...",
        searchEmptyMsg: "見つかりませんでした。",
        searchModalTitlePrefix: "「", 
        searchModalTitleSuffix: "」の出演情報",
        searchModalClose: "×",       
        tabFood: "フード",
        tabMap: "マップ",
        tabWeather: "天気",
        tabMemo: "メモ",
        mapZoomIn: "＋",             
        mapZoomOut: "－",            
        mapZoomReset: "Reset",       
        foodHeader: "フードエリア一覧",
        foodFavListTitle: "★ 食べたいものリスト",
        foodEmptyMsg: "右上にある星マーク(★)を押すと、ここに追加されます。<br>カードはメニュー部分をドラッグして並べ替え可能です。",
        weatherOfflineMsg: "<p>現在オフラインです。<br>天気情報を取得するにはインターネットの接続が必要です。</p>",
        weatherNotice: "※サイト側のセキュリティ制限等でうまく表示されない場合は、<br><a href='{WEATHER_URL}' target='_blank' rel='noopener noreferrer' id='weatherLinkText'>こちらからウェザーニュースを開いて</a>ご確認ください。",
        memoHeader: "メモ",
        memoNotice: "※注意点※<br>・ブラウザのキャッシュ（履歴データ）クリアを行うと、マイタイムテーブル等を含めてメモの内容も消えてしまいます。<br>・他のデバイス（スマホからPCなど）への共有はできません。",
        memoPlaceholder: "ライブの感想やメモを自由に書き込めます。\n入力すると自動保存されます。"
    }
};

// --- 2. ステージ情報定義 ---
const stagesInfo = [
    { id: 'moon', name: 'MOON GARDEN', color: '#F4D03F' },
    { id: 'center', name: 'センター・オブ・ジ・イバラ', color: '#E74C3C' },
    { id: 'forest', name: 'FOREST PARK', color: '#2ECC71' },
    { id: 'busker', name: 'BUSKER AREA', color: '#9B59B6' },
    { id: 'sky', name: 'SKY FIELD', color: '#3498DB' },
    { id: 'budou', name: '葡萄浪漫館 YOU SEE A-GO GO', color: '#8E44AD' },
    { id: 'rest', name: '休憩処', color: '#95A5A6' }
];

// --- 3. データ作成用ヘルパー関数 ---
const e = (name, start, end, genre = "", options = {}) => ({ name, start, end, genre, ...options });

function getFavId(dayKey, stageId, artistName) {
    const cleanName = artistName.replace(/<[^>]*>/g, '').replace(/[^a-zA-Z0-9ぁ-んァ-ヶー一-龠]/g, '');
    return `${dayKey}_${stageId}_${cleanName}`;
}

// ==========================================
// --- 4. フードデータ一覧 ---
const foodList = [ 
    // 今回はフード情報がないため空配列とします
];

// --- 5. タイムテーブル・出演アーティストデータ ---
const timetableData = {
    day1: {
        date: "2026-05-30", // 仮日程
        moon: [
            e("DawnLuLu（オーディション特別賞）", "10:00", "10:30", "Pop"),
            e("真舟とわ", "11:10", "12:00", "Acoustic"),
            e("さとう。", "12:40", "13:30", "Pop"),
            e("もっさ（ネクライトーキー）", "14:10", "15:00", "Acoustic/Pop"),
            e("荒谷翔大", "15:40", "16:30", "Pop"),
            e("天々高々", "17:10", "18:05", "Rock"),
            e("日食なつこ", "18:45", "19:40", "Piano/Pop")
        ],
        center: [
            e("ぼくらのスマイルキッズプロジェクト", "10:30", "11:00", "Family"),
            e("土屋雄太", "12:00", "12:40", "Acoustic"),
            e("猪原純", "13:30", "14:10", "Acoustic"),
            e("大平伸正", "15:00", "15:40", "Acoustic"),
            e("mekakushe", "16:30", "17:10", "Pop"),
            e("ゆうさり（独奏）", "18:05", "18:45", "Acoustic"),
            e("タカハシコウキ（peridots）", "19:40", "20:20", "Rock/Acoustic")
        ],
        forest: [
            e("the paddles", "10:30", "11:20", "Rock"),
            e("ハク。", "11:55", "12:45", "Pop"),
            e("bacho", "13:20", "14:10", "Rock"),
            e("グソクムズ", "14:45", "15:35", "Pop/Rock"),
            e("石崎ひゅーい", "16:10", "17:05", "Pop"),
            e("sleepy.ab× 近藤康平(ライブペインティング) × mona(調香師)", "17:45", "18:40", "Alternative"),
            e("TOMOVSKY", "19:20", "20:15", "Rock")
        ],
        busker: [
            e("パフォーマンス：ぼくらのスマイルキッズプロジェクト / 大道芸人S4 / 伝承パフォーマー ぢゃあ（けん玉）", "09:30", "20:00", "Performance", { hideEndTime: true, isLightBg: true })
        ],
        sky: [
            e("大舌勲（井原市長）開催宣言", "09:30", "09:40", "Speech", { isLightBg: true }),
            e("ターコイズ（オーディショングランプリ）", "09:40", "10:10", "Rock"),
            e("SCOOBIE DO", "10:50", "11:40", "Funk/Rock"),
            e("BRADIO", "12:20", "13:10", "Funk/Rock"),
            e("鶴", "13:50", "14:40", "Rock"),
            e("TENDOUJI", "15:20", "16:10", "Indie Rock"),
            e("四星球", "16:50", "17:40", "Comic Rock"),
            e("ドミコ", "18:20", "19:15", "Garage Rock"),
            e("Homecomings", "19:55", "20:50", "Indie Pop"),
            e("星空メッセンジャー ササキユウタ presents 天体観測会", "21:30", "22:30", "Event", { hideEndTime: true })
        ],
        budou: [
            e("メリケンサック（LOCAL LIVEHOUSE act）", "10:00", "10:30", "Rock"),
            e("きのこ島（LOCAL LIVEHOUSE act）", "11:00", "11:30", "Rock"),
            e("laetrile（LOCAL LIVEHOUSE act）", "12:00", "12:30", "Rock"),
            e("上川周平とじゃがいもフィルハーモニー（LOCAL LIVEHOUSE act）", "13:00", "13:30", "Acoustic"),
            e("sakisakihungry（LOCAL LIVEHOUSE act）", "14:00", "14:30", "Rock"),
            e("o_all", "15:00", "15:40", "Rock"),
            e("クリトリック・リス", "16:00", "16:50", "Electronic"),
            e("鈴木実貴子ズ", "17:20", "18:15", "Acoustic"),
            e("New Sprint（オーディション特別賞）", "18:35", "19:05", "Rock"),
            e("おとなりアイニー（オーディション特別賞）", "19:35", "20:05", "Rock"),
            e("藤井裕士によるラジオ体操", "32:00", "32:10", "Exercise", { isLightBg: true })
        ],
        rest: [
            e("ビア怪談", "12:30", "13:00", "Talk"),
            e("野崎新聞健太郎、ノンストップくそ＆シガー・テレシ", "13:00", "13:30", "Talk"),
            e("ビア怪談", "13:30", "14:00", "Talk"),
            e("hoshioto TALK SESSION（永井純一 × 藤井裕士）", "14:30", "15:00", "Talk"),
            e("ビア怪談", "16:50", "17:20", "Talk"),
            e("ビア怪談", "18:05", "18:35", "Talk"),
            e("hoshioto TALK SESSION / ササキユウタ（星空メッセンジャー）", "19:05", "19:35", "Talk")
        ]
    }
};

// --- 検索用：読み仮名辞書 ---
const artistYomiDict = {
    "DawnLuLu（オーディション特別賞）": "どーんるる",
    "真舟とわ": "まふねとわ",
    "さとう。": "さとう",
    "もっさ（ネクライトーキー）": "もっさ",
    "荒谷翔大": "あらたにしょうた",
    "天々高々": "てんてんたかだか",
    "日食なつこ": "にっしょくなつこ",
    "ぼくらのスマイルキッズプロジェクト": "ぼくらのすまいるきっずぷろじぇくと",
    "土屋雄太": "つちやゆうた",
    "猪原純": "いはらじゅん",
    "大平伸正": "おおひらのぶまさ",
    "mekakushe": "めかくし",
    "ゆうさり（独奏）": "ゆうさり",
    "タカハシコウキ（peridots）": "たかはしこうき",
    "the paddles": "ざぱどるず",
    "ハク。": "はく",
    "bacho": "ばちょ",
    "グソクムズ": "ぐそくむず",
    "石崎ひゅーい": "いしざきひゅーい",
    "sleepy.ab× 近藤康平(ライブペインティング) × mona(調香師)": "すりーぴーえーびー",
    "TOMOVSKY": "ともふすきー",
    "大舌勲（井原市長）開催宣言": "おおしたさとお",
    "ターコイズ（オーディショングランプリ）": "たーこいず",
    "SCOOBIE DO": "すくーびーどぅー",
    "BRADIO": "ぶらでお",
    "鶴": "つる",
    "TENDOUJI": "てんどうじ",
    "四星球": "すーしんちゅう",
    "ドミコ": "どみこ",
    "Homecomings": "ほーむかみんぐす",
    "星空メッセンジャー ササキユウタ presents 天体観測会": "ほしぞらめっせんじゃー",
    "メリケンサック（LOCAL LIVEHOUSE act）": "めりけんさっく",
    "きのこ島（LOCAL LIVEHOUSE act）": "きのこじま",
    "laetrile（LOCAL LIVEHOUSE act）": "れとりる",
    "上川周平とじゃがいもフィルハーモニー（LOCAL LIVEHOUSE act）": "かみかわしゅうへい",
    "sakisakihungry（LOCAL LIVEHOUSE act）": "さきさきはんぐりー",
    "o_all": "おーおーる",
    "クリトリック・リス": "くりとりっくりす",
    "鈴木実貴子ズ": "すずきみきこず",
    "New Sprint（オーディション特別賞）": "にゅーすぷりんと",
    "おとなりアイニー（オーディション特別賞）": "おとなりあいにー",
    "藤井裕士によるラジオ体操": "ふじいゆうじ",
    "ビア怪談": "びあかいだん",
    "野崎新聞健太郎、ノンストップくそ＆シガー・テレシ": "のざきしんぶんけんたろう",
    "hoshioto TALK SESSION（永井純一 × 藤井裕士）": "ほしおととーくせっしょん",
    "hoshioto TALK SESSION / ササキユウタ（星空メッセンジャー）": "ほしおととーくせっしょん"
};

// --- 公式HPリンク辞書 ---
const artistLinkDict = {
    // 必要に応じて各アーティストのURLを設定します
};

// --- Spotifyリンク辞書 ---
const artistSpotifyDict = {
    // 必要に応じて各アーティストのSpotify Embed URLを設定します
};

// 検索時の揺れを吸収するため、文字を平仮名や小文字に統一する関数です
function normalizeForSearch(str) {
    if (!str) return "";
    let normalized = str.replace(/[\u30a1-\u30f6]/g, function(match) {
        return String.fromCharCode(match.charCodeAt(0) - 0x60);
    });
    normalized = normalized.toLowerCase();
    return normalized;
}

/**
 * ==========================================
 * 【システム・ロジックエリア】
 * データの意味に従って画面を作るだけの処理群です
 * ==========================================
 */

// --- 状態を管理する変数 ---
let currentDay = 1; // 選択中のタブがDay1かDay2か等を覚えておきます
let mapScale = 1.0;
let fullArtistData = [];

// ブラウザにデータを保存するための「引き出しの名前（キー名）」です
const FAV_KEY = APP_CONFIG.storagePrefix + 'favs';
const FOOD_FAV_KEY = APP_CONFIG.storagePrefix + 'food_favs';
const LAST_TAB_KEY = APP_CONFIG.storagePrefix + 'last_tab';
const MEMO_KEY = APP_CONFIG.storagePrefix + 'memo';

// 保存されているお気に入りデータを読み込みます
let favorites = JSON.parse(localStorage.getItem(FAV_KEY)) || {};
let foodFavoritesOrder = JSON.parse(localStorage.getItem(FOOD_FAV_KEY)) || [];

// お気に入りデータをブラウザに保存する関数です
const saveFavorites = () => localStorage.setItem(FAV_KEY, JSON.stringify(favorites));
const saveFoodFavorites = () => localStorage.setItem(FOOD_FAV_KEY, JSON.stringify(foodFavoritesOrder));

// --- 現在時刻の計算ロジック ---
// 指定した開催日の「開始時刻から現在何分経過しているか」を計算します
function getCurrentMinsForDay(dayKey) {
    const now = new Date();
    const dataDate = new Date(timetableData[dayKey].date);
    const isToday = now.toDateString() === dataDate.toDateString();
    
    // 深夜帯をフェスの「同日」として扱うため、カレンダー上の翌日を計算します
    const targetNextDay = new Date(dataDate);
    targetNextDay.setDate(targetNextDay.getDate() + 1); 
    const isNextDayEarly = now.getHours() < APP_CONFIG.startHour && now.toDateString() === targetNextDay.toDateString();

    // もし今日がその開催日であれば、経過した分数を計算して返します
    if (isToday || isNextDayEarly) {
        return (now.getHours() + (isNextDayEarly ? 24 : 0) - APP_CONFIG.startHour) * 60 + now.getMinutes();
    }
    // 開催日以外の場合は -1 を返します
    return -1; 
}

// --- 指定した日の現在時刻の1時間前に自動スクロールする関数 ---
function scrollToCurrentTime(dayKey) {
    // スクロールさせる対象のエリア（HTMLの id="ttScrollArea"）を取得します
    const scrollArea = document.getElementById('ttScrollArea');
    if (!scrollArea) return; // エリアが見つからなければ処理を中止します

    // 現在時刻がその日の開始時刻から何分経過しているかを計算します
    const currentMins = getCurrentMinsForDay(dayKey);

    // 該当日ではない（currentMins が -1）場合、一番上（0）に戻して処理を終わります
    if (currentMins < 0) {
        scrollArea.scrollTop = 0;
        return;
    }

    // 1時間前（60分前）の分数を計算します。
    // マイナスにならないように Math.max(0, ...) を使い、最低でも0（一番上）になるようにします
    const targetMins = Math.max(0, currentMins - 60);

    // CSSの変数（--px-per-min）を取得して、1分あたり何ピクセルで描画されているか調べます
    const rootStyles = getComputedStyle(document.documentElement);
    // 変数が見つからない場合は予備として '2' を使います
    const pxPerMin = parseFloat(rootStyles.getPropertyValue('--px-per-min')) || 2;

    // 分数をピクセルに変換して、上からのスクロール位置（scrollTop）に設定します
    scrollArea.scrollTop = targetMins * pxPerMin;
}

// --- HTMLの空箱に文字やデータを流し込む関数 ---
function applyAppConfig() {
    const ui = APP_CONFIG.ui;
    
    // アプリタイトルなどをHTMLに反映します
    if(document.getElementById('appTitle')) document.getElementById('appTitle').innerHTML = APP_CONFIG.festivalName;
    
    // 公式リンクの設定を反映します
    const officialLinkEl = document.getElementById('officialLink');
    if(officialLinkEl) {
        officialLinkEl.href = APP_CONFIG.officialUrl;
        officialLinkEl.innerHTML = ui.officialLinkText;
    }

    // 各種テキストをHTMLに流し込みます
    if(document.getElementById('disclaimerText')) document.getElementById('disclaimerText').innerHTML = ui.disclaimer;
    if(document.getElementById('artistSearchInput')) document.getElementById('artistSearchInput').placeholder = ui.searchPlaceholder;
    if(document.getElementById('btnFood')) document.getElementById('btnFood').textContent = ui.tabFood;
    if(document.getElementById('btnMap')) document.getElementById('btnMap').textContent = ui.tabMap;
    if(document.getElementById('btnWeather')) document.getElementById('btnWeather').textContent = ui.tabWeather;
    if(document.getElementById('btnMemo')) document.getElementById('btnMemo').textContent = ui.tabMemo;
    if(document.getElementById('foodHeader')) document.getElementById('foodHeader').textContent = ui.foodHeader;
    
    if(document.getElementById('weatherNotice')) {
        document.getElementById('weatherNotice').innerHTML = ui.weatherNotice.replace('{WEATHER_URL}', APP_CONFIG.weather.linkUrl);
    }
    
    if(document.getElementById('weatherOfflineContent')) document.getElementById('weatherOfflineContent').innerHTML = ui.weatherOfflineMsg;
    if(document.getElementById('memoHeader')) document.getElementById('memoHeader').textContent = ui.memoHeader;
    if(document.getElementById('memoNotice')) document.getElementById('memoNotice').innerHTML = ui.memoNotice;
    if(document.getElementById('memoTextArea')) document.getElementById('memoTextArea').placeholder = ui.memoPlaceholder;
    if(document.getElementById('searchModalClose')) document.getElementById('searchModalClose').textContent = ui.searchModalClose;
    if(document.getElementById('btnZoomIn')) document.getElementById('btnZoomIn').textContent = ui.mapZoomIn;
    if(document.getElementById('btnZoomOut')) document.getElementById('btnZoomOut').textContent = ui.mapZoomOut;
    if(document.getElementById('btnZoomReset')) document.getElementById('btnZoomReset').textContent = ui.mapZoomReset;

    // 流用しやすいように、APP_CONFIG.days の日数に合わせてDayタブボタンを自動生成します
    const tabContainer = document.getElementById('tabContainer');
    const firstStaticTab = document.getElementById('btnFood'); 
    
    document.querySelectorAll('.day-tab-btn').forEach(el => el.remove());

    APP_CONFIG.days.forEach((day) => {
        const btnId = 'btn' + day.id.charAt(0).toUpperCase() + day.id.slice(1);
        const btn = document.createElement('button');
        btn.className = 'tab-btn day-tab-btn';
        btn.id = btnId;
        btn.textContent = day.label;
        tabContainer.insertBefore(btn, firstStaticTab);
    });

    // マップ画像をHTMLに追加します
    const mapWrapper = document.getElementById('mapWrapper');
    if (mapWrapper && APP_CONFIG.mapImages) {
        APP_CONFIG.mapImages.forEach(src => {
            const img = document.createElement('img');
            img.className = 'area-map-img';
            img.src = src;
            img.alt = 'Area Map';
            mapWrapper.appendChild(img);
        });
    }

    // 天気情報をHTMLに追加します
    if(document.getElementById('weatherTitle')) document.getElementById('weatherTitle').textContent = APP_CONFIG.weather.areaName;
    const weatherContainer = document.getElementById('weatherIframeContainer');
    if (weatherContainer && APP_CONFIG.weather.iframeUrl) {
        const iframe = document.createElement('iframe');
        iframe.src = APP_CONFIG.weather.iframeUrl;
        iframe.title = "1時間毎の天気";
        weatherContainer.appendChild(iframe);
    }

    // 出典情報を設定します
    const sourceHtml = `${APP_CONFIG.source.text}<br>（<a href="${APP_CONFIG.source.url}" target="_blank" rel="noopener noreferrer" class="source-link">${APP_CONFIG.source.url}</a>）`;
    document.querySelectorAll('.source-credit').forEach(el => el.innerHTML = sourceHtml);
}

// --- 画面上のボタンにイベント（クリック時の動作）を一括で割り当てる関数 ---
function setupEventListeners() {
    // 1. タブ切り替えボタンのクリックイベント
    APP_CONFIG.days.forEach(day => {
        const btnId = 'btn' + day.id.charAt(0).toUpperCase() + day.id.slice(1);
        const btn = document.getElementById(btnId);
        if(btn) btn.addEventListener('click', () => switchTab(day.id));
    });
    
    document.getElementById('btnFood').addEventListener('click', () => switchTab('food'));
    document.getElementById('btnMap').addEventListener('click', () => switchTab('map'));
    document.getElementById('btnWeather').addEventListener('click', () => switchTab('weather'));
    document.getElementById('btnMemo').addEventListener('click', () => switchTab('memo'));

    // 2. マップのズームボタンのクリックイベント
    document.getElementById('btnZoomIn').addEventListener('click', () => zoomMap(0.2));
    document.getElementById('btnZoomOut').addEventListener('click', () => zoomMap(-0.2));
    document.getElementById('btnZoomReset').addEventListener('click', () => resetZoom());

    // 3. タイムテーブル内の「★ボタン」のクリックイベント
    document.getElementById('gridContainer').addEventListener('click', (e) => {
        if (e.target.classList.contains('fav-btn')) {
            const favId = e.target.getAttribute('data-fav-id');
            if (favId) toggleFav(favId);
        }
    });

    // 4. フード画面の「エリア開閉」と「★ボタン」のクリックイベント
    document.getElementById('foodContainer').addEventListener('click', (e) => {
        const toggleEl = e.target.closest('.food-area-toggle');
        if (toggleEl) {
            toggleFoodArea(toggleEl);
            return;
        }
        if (e.target.classList.contains('food-fav-btn')) {
            const favId = e.target.getAttribute('data-fav-id');
            if (favId) toggleFoodFav(favId);
        }
    });

    // 5. 検索結果モーダル内の各種ボタンのクリックイベント
    document.getElementById('searchModalContent').addEventListener('click', (e) => {
        // --- 既存の「★」ボタンの処理 ---
        if (e.target.classList.contains('fav-btn')) {
            const favId = e.target.getAttribute('data-fav-id');
            if (favId) {
                toggleFav(favId);
                const btn = e.target;
                const block = btn.closest('.artist-block');
                if (favorites[favId]) {
                    btn.classList.add('active');
                    block.classList.add('favorited');
                } else {
                    btn.classList.remove('active');
                    block.classList.remove('favorited');
                }
            }
        }

        // --- 公式HPリンクのクリック処理 ---
        // closest()を使って、クリックされた場所から一番近い <a> タグを探します
        const linkEl = e.target.closest('.artist-official-link');
        if (linkEl) {
            // HTMLのデータ属性(data-url)からURLの意味（データ）を取り出します
            const url = linkEl.getAttribute('data-url');
            
            // データが「公式HP無し」という状態であれば、リンク移動を止めてアラートを出します
            if (url === "公式HP無し") {
                e.preventDefault(); // <a>タグ本来の「別のページへ飛ぶ」動作をキャンセルします
                alert('【公式HP無し】');
            }
        }
    });
}

// タイムテーブルのお気に入り状態を切り替える関数です
function toggleFav(id) {
    favorites[id] ? delete favorites[id] : favorites[id] = true;
    saveFavorites();
    renderTimetable(); 
}

// フードのお気に入り状態を切り替える関数です
function toggleFoodFav(id) {
    const index = foodFavoritesOrder.findIndex(item => item.id === id);
    if (index > -1) {
        foodFavoritesOrder.splice(index, 1); 
    } else {
        const [areaName, shopName] = id.split("::");
        foodFavoritesOrder.push({ id: id, shopName: shopName, areaName: areaName }); 
    }
    saveFoodFavorites();
    renderFoodSection(); 
}

// フードのエリア（アコーディオン）を開閉する関数です
function toggleFoodArea(element) {
    element.classList.toggle('open');
    const content = element.nextElementSibling;
    if(content) content.classList.toggle('open');
}

// "HH:MM" 形式の時刻を、タイムテーブル上の表示位置（分単位）に変換します
function timeToMins(timeStr) {
    const [h, m] = timeStr.split(':').map(Number);
    const adjustedH = h < APP_CONFIG.startHour ? h + 24 : h;
    return (adjustedH - APP_CONFIG.startHour) * 60 + m;
}

// "HH:MM" を "H:MM" に整えて表示するための関数です
function formatTimeDisplay(timeStr) {
    let [h, m] = timeStr.split(':').map(Number);
    if(h >= 24) h -= 24; // 25時などを元の1時表記に戻します
    // テンプレートリテラルを使って、分が1桁の場合は前に0を付けて綺麗に整えます
    return `${h}:${m.toString().padStart(2, '0')}`;
}

// タブを切り替える関数です
function switchTab(target) {
    // 全てのタブと画面から 'active' クラスを外します
    document.querySelectorAll('.tab-btn, .content-section').forEach(el => el.classList.remove('active'));

    const dayMatch = target.match(/^day(\d+)$/);
    
    if (dayMatch) {
        currentDay = parseInt(dayMatch[1]);
        const btnId = 'btnDay' + currentDay;
        const btnEl = document.getElementById(btnId);
        if(btnEl) btnEl.classList.add('active');
        document.getElementById('timetableSection').classList.add('active');
        
        // タイムテーブルを描画します
        renderTimetable(); 
        
        // タイムテーブルを描画した直後に、現在時刻の1時間前に自動スクロールさせます
        // 画面の描画が完了してから確実にスクロールさせるため、setTimeoutで少しだけ時間差（10ミリ秒）を設けます
        setTimeout(() => {
            scrollToCurrentTime(`day${currentDay}`);
        }, 10);
        
    } else {
        const btnId = 'btn' + target.charAt(0).toUpperCase() + target.slice(1);
        const btnEl = document.getElementById(btnId);
        if(btnEl) btnEl.classList.add('active');
        const sectionEl = document.getElementById(target + 'Section');
        if(sectionEl) sectionEl.classList.add('active');
    }
    
    // 天気タブの場合はオフラインかどうかチェックします
    if (target === 'weather') {
        checkWeatherOnlineStatus(); 
        const weatherSection = document.getElementById('weatherSection');
        if (weatherSection) {
            weatherSection.scrollTop = 0;
        }
    }
    
    // 次回開いた時のために最後に開いたタブを記憶します
    localStorage.setItem(LAST_TAB_KEY, target);
}

// ネットに繋がっているか確認する関数です（天気用）
function checkWeatherOnlineStatus() {
    const weatherSection = document.getElementById('weatherSection');
    if (weatherSection) {
        if (navigator.onLine) {
            weatherSection.classList.remove('is-offline');
        } else {
            weatherSection.classList.add('is-offline');
        }
    }
}
window.addEventListener('online', checkWeatherOnlineStatus);
window.addEventListener('offline', checkWeatherOnlineStatus);

// タイムテーブルのステージ名（ヘッダー）を描画する関数です
function renderHeaders(myttCols) {
    let html = '';
    if(myttCols > 0) {
        html += `<div class="stage-header mytt" style="--mytt-cols: ${myttCols};">
                    <div class="stage-name mytt">マイタイテ</div>
                 </div>`;
    }
    stagesInfo.forEach(stage => {
        // 色情報はCSSの変数として渡します
        const style = `style="--stage-color: ${stage.color};"`;
        html += `<div class="stage-header">
                    <div class="stage-name" ${style}>${stage.name}</div>
                 </div>`;
    });
    document.getElementById('stageHeaders').innerHTML = html;
}

// 1つのアーティストのブロック（四角い箱）のHTMLを作る関数です
function getArtistHtml(artist, stage, dayKey, isMyTT = false, currentMins = -1) {
    const startMin = timeToMins(artist.start);
    const endMin = timeToMins(artist.end);
    const duration = endMin - startMin;

    const favId = getFavId(dayKey, stage.id, artist.name);
    const isFav = favorites[favId];
    
    // 現在時刻がこのアーティストの演奏時間内かどうか判定します
    let isPlaying = false;
    if (currentMins >= startMin && currentMins < endMin) {
        isPlaying = true;
    }

    // 色を薄くする（is-light-bg）などの「意味」だけをCSSのクラスとして渡します
    const classes = ['artist-block', isFav && 'favorited', isPlaying && 'playing', artist.isLightBg && 'is-light-bg'].filter(Boolean).join(' ');
    
    // 【ルール厳守】マイタイムテーブル用のステージバッジHTML（配置は一切変更していません）
    const stageBadgeHtml = isMyTT ? `<div class="mytt-stage-name">${stage.name}</div>` : '';

    if (artist.isSpecialLayout) {
        const displayTime = artist.displayTime || `${formatTimeDisplay(artist.start)}-`;
        const inlineStageBadge = isMyTT ? `<span class="mytt-stage-name inline-badge">${stage.name}</span>` : '';
        return `<div class="${classes} artist-block-special" style="--start-min: ${startMin}; --duration: ${duration}; --artist-bg: ${stage.color};">
                    ${inlineStageBadge}
                    <span class="artist-time">${displayTime}</span>
                    <span class="artist-name">${artist.name}</span>
                    <button class="fav-btn ${isFav ? 'active' : ''}" data-fav-id="${favId}">★</button>
                </div>`;
    }

    const displayGenre = (artist.hideEndTime || isMyTT) ? "" : (artist.genre || "");
    const timeText = artist.hideEndTime ? `${formatTimeDisplay(artist.start)}-` : `${formatTimeDisplay(artist.start)}-${formatTimeDisplay(artist.end)}`;
    const metaHtml = displayGenre ? `<div class="artist-meta">${displayGenre}</div>` : '';
    
    return `<div class="${classes}" style="--start-min: ${startMin}; --duration: ${duration}; --artist-bg: ${stage.color};">
                ${stageBadgeHtml}
                <div class="artist-top">
                    <span class="artist-time">${timeText}</span>
                    <button class="fav-btn ${isFav ? 'active' : ''}" data-fav-id="${favId}">★</button>
                </div>
                <div class="artist-name">${artist.name}</div>
                ${metaHtml}
            </div>`;
}

// ブロックからはみ出る文字のサイズを自動で小さくする関数です
function adjustFontSize() {
    // ※この処理はブラウザへの計算負荷（レイアウトスラッシング）がやや高めですが、
    // 長いバンド名を綺麗に収めるために現状維持としています。
    document.querySelectorAll('.artist-block:not(.food-block):not(.search-modal-content .artist-block)').forEach(block => {
        const nameEl = block.querySelector('.artist-name');
        const timeEl = block.querySelector('.artist-time');
        const stageBadge = block.querySelector('.mytt-stage-name');
        const metaEl = block.querySelector('.artist-meta');

        if (!nameEl) return;

        const isRow = block.classList.contains('artist-block-special');
        let fontSize = isRow ? 11 : 13;
        const targetEl = nameEl; // 常にバンド名の文字サイズを調整する

        targetEl.style.fontSize = fontSize + 'px';
        
        while ((block.scrollHeight > block.offsetHeight || block.scrollWidth > block.clientWidth) && fontSize > 6) {
            fontSize -= 0.5;
            targetEl.style.fontSize = fontSize + 'px';
        }

        if (block.scrollHeight > block.offsetHeight) {
            block.classList.add('compact-mode');
            let subFontSize = 10;
            while ((block.scrollHeight > block.offsetHeight) && subFontSize > 5) {
                subFontSize -= 0.5;
                if (timeEl) timeEl.style.fontSize = subFontSize + 'px';
                if (stageBadge) stageBadge.style.fontSize = Math.max(4, subFontSize - 2) + 'px';
                if (metaEl) metaEl.style.fontSize = Math.max(5, subFontSize - 2) + 'px';
            }
        }
    });
}

// タイムテーブル全体を描画する関数です
function renderTimetable() {
    const dayKey = `day${currentDay}`;
    const data = timetableData[dayKey];
    if (!data) return; // データが存在しない場合は処理を抜けます

    // 時間の目盛りを作ります
    let timeHtml = '';
    for(let h = APP_CONFIG.startHour; h <= APP_CONFIG.endHour; h++) {
        timeHtml += `<div class="time-slot"><span>${h >= 24 ? h-24 : h}:00</span></div>`;
    }
    document.getElementById('timeCol').innerHTML = timeHtml;

    const currentMins = getCurrentMinsForDay(dayKey);

    // マイタイムテーブル（お気に入り）に登録されたアーティストを集めます
    let myTtItems = [];
    stagesInfo.forEach((stage, stageIndex) => {
        (data[stage.id] || []).forEach(artist => {
            const favId = getFavId(dayKey, stage.id, artist.name);
            if(favorites[favId]) myTtItems.push({ artist, stage, stageIndex });
        });
    });

    if (APP_CONFIG.settings.priorityStageOrder) {
        myTtItems.sort((a,b) => {
            if (a.stageIndex !== b.stageIndex) return a.stageIndex - b.stageIndex;
            return timeToMins(a.artist.start) - timeToMins(b.artist.start);
        });
    } else {
        myTtItems.sort((a,b) => timeToMins(a.artist.start) - timeToMins(b.artist.start));
    }

    // 時間が被っている場合は横に並べる処理（カラム分け）を行います
    let myTtColumns = []; 
    myTtItems.forEach(item => {
        let maxOverlapCol = -1;
        for (let colIdx = 0; colIdx < myTtColumns.length; colIdx++) {
            const overlap = myTtColumns[colIdx].some(ex => {
                return Math.max(timeToMins(item.artist.start), timeToMins(ex.artist.start)) < 
                       Math.min(timeToMins(item.artist.end), timeToMins(ex.artist.end));
            });
            if (overlap) maxOverlapCol = Math.max(maxOverlapCol, colIdx);
        }

        let placed = false;
        for (let colIdx = maxOverlapCol + 1; colIdx < myTtColumns.length; colIdx++) {
            const overlap = myTtColumns[colIdx].some(ex => {
                return Math.max(timeToMins(item.artist.start), timeToMins(ex.artist.start)) < 
                       Math.min(timeToMins(item.artist.end), timeToMins(ex.artist.end));
            });
            if (!overlap) {
                myTtColumns[colIdx].push(item);
                placed = true;
                break;
            }
        }
        if (!placed) myTtColumns.push([item]);
    });

    const myTtColCount = myTtItems.length ? myTtColumns.length : 0;
    renderHeaders(myTtColCount); 

    // HTMLに変換して流し込みます
    let gridHtml = '';
    if(myTtColCount > 0) {
        myTtColumns.forEach(col => {
            gridHtml += `<div class="grid-col mytt"><div class="grid-bg-lines"></div>${col.map(i => getArtistHtml(i.artist, i.stage, dayKey, true, currentMins)).join('')}</div>`;
        });
    }

    stagesInfo.forEach(stage => {
        const content = (data[stage.id] || []).map(a => getArtistHtml(a, stage, dayKey, false, currentMins)).join('');
        gridHtml += `<div class="grid-col"><div class="grid-bg-lines"></div>${content}</div>`;
    });

    // ここで現在時刻の線をHTMLの最後に追加しています
    gridHtml += `<div class="current-time-line" id="currentTimeLine"></div>`;
    
    const gridContainer = document.getElementById('gridContainer');
    gridContainer.innerHTML = gridHtml;

    const totalHours = APP_CONFIG.endHour - APP_CONFIG.startHour + 1;
    gridContainer.style.height = `calc(${totalHours} * 60 * var(--px-per-min) * 1px)`;
    
    updateCurrentTimeLine(); 
    adjustFontSize(); 
}

// 現在時刻の赤い横線を正しい位置に動かす関数です
function updateCurrentTimeLine() {
    const line = document.getElementById('currentTimeLine');
    if(!line) return;

    const dayKey = `day${currentDay}`;
    const currentMins = getCurrentMinsForDay(dayKey);

    const maxMins = (APP_CONFIG.endHour - APP_CONFIG.startHour) * 60;

    // 分数が0～最大分数の間に収まっている時だけ線を表示します
    if(currentMins >= 0 && currentMins <= maxMins) {
        line.classList.add('is-visible');
        line.style.setProperty('--current-min', currentMins); 
        return;
    }
    line.classList.remove('is-visible'); 
}

// 1つのフード店舗のカード（HTML）を作る関数です
function generateFoodCard(shop, areaName, isDraggable = false) {
    const menuItems = shop.menus.map(m => `<li>${m}</li>`).join('');
    const messageHtml = shop.message.replace(/\n/g, '<br>');
    const imgSrc = shop.img || ""; 
    const imgHtml = imgSrc ? `<img src="${imgSrc}" class="food-card-img" alt="${shop.name}">` : `<span>NO IMAGE</span>`;
        
    const id = areaName + "::" + shop.name;
    const isFav = foodFavoritesOrder.some(item => item.id === id);
    const safeId = id.replace(/"/g, '"');
    
    const classes = isDraggable ? "food-card draggable-card" : "food-card";
    const dragAttr = isDraggable ? `draggable="true" data-id="${safeId}"` : `data-id="${safeId}"`;

    return `
    <div class="${classes}" ${dragAttr}>
        <div class="food-card-area-badge">${areaName}</div>
        <button class="food-fav-btn ${isFav ? 'active' : ''}" data-fav-id="${safeId}">★</button>
        <div class="food-card-img-wrapper">${imgHtml}</div>
        <div class="food-card-body">
            <h3 class="food-card-title">${shop.name}</h3>
            <ul class="food-card-menus">${menuItems}</ul>
            <p class="food-card-message">${messageHtml}</p>
        </div>
    </div>`;
}

// フード一覧画面全体を描画する関数です
function renderFoodSection() {
    let html = '';
    const ui = APP_CONFIG.ui;
    
    html += `
    <div class="food-area-toggle open food-area-fav">
        <span>${ui.foodFavListTitle}</span>
        <span class="toggle-icon">▶</span>
    </div>
    <div class="food-area-content open" id="foodFavoritesList">
    `;
    
    if (foodFavoritesOrder.length === 0) {
        html += `<div class="food-empty-msg">${ui.foodEmptyMsg}</div>`;
    } else {
        foodFavoritesOrder.forEach(favItem => {
            let shopData = null;
            foodList.forEach(area => {
                if(area.name === favItem.areaName) {
                    const found = area.menu.find(s => s.name === favItem.shopName);
                    if(found) shopData = found;
                }
            });
            if (shopData) html += generateFoodCard(shopData, favItem.areaName, true); 
        });
    }
    html += `</div>`;

    foodList.forEach(area => {
        const shopsHtml = area.menu.map(shop => generateFoodCard(shop, area.name, false)).join('');
        html += `
        <div class="food-area-toggle">
            <span>${area.name}</span>
            <span class="toggle-icon">▶</span>
        </div>
        <div class="food-area-content">
            ${shopsHtml}
        </div>`;
    });
    
    document.getElementById('foodContainer').innerHTML = html;
    setupDragAndDrop(); 
}

// フードのお気に入りをドラッグして並べ替えるための準備です
function setupDragAndDrop() {
    const container = document.getElementById('foodFavoritesList');
    if (!container) return;
    const cards = container.querySelectorAll('.draggable-card');
    
    cards.forEach(card => {
        card.addEventListener('dragstart', () => card.classList.add('dragging'));
        card.addEventListener('dragend', () => {
            card.classList.remove('dragging');
            updateFoodFavoritesOrder(); 
        });
    });
    
    container.addEventListener('dragover', e => {
        e.preventDefault(); 
        const afterElement = getDragAfterElement(container, e.clientX, e.clientY);
        const draggable = document.querySelector('.dragging');
        if (!draggable) return;
        
        if (afterElement == null) {
            container.appendChild(draggable);
        } else {
            container.insertBefore(draggable, afterElement);
        }
    });
}

// ドラッグ中、どのカードの下に挿入すべきかを計算する関数です
function getDragAfterElement(container, x) { // xだけでOK
    const draggableElements = [...container.querySelectorAll('.draggable-card:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = x - (box.left + box.width / 2);
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// ドラッグで並び替えた後の新しい順番を保存する関数です
function updateFoodFavoritesOrder() {
    const container = document.getElementById('foodFavoritesList');
    const cards = container.querySelectorAll('.draggable-card');
    const newOrder = [];
    cards.forEach(card => {
        const id = card.getAttribute('data-id');
        const favItem = foodFavoritesOrder.find(item => item.id === id);
        if (favItem) newOrder.push(favItem);
    });
    foodFavoritesOrder = newOrder;
    saveFoodFavorites();
}

// マップの拡大縮小を行う関数です
function zoomMap(delta) {
    mapScale = Math.min(Math.max(0.5, mapScale + delta), 3.0);
    // JSは現在の倍率をCSSに渡すだけにします
    document.getElementById('mapWrapper').style.setProperty('--map-scale', mapScale);
}
function resetZoom() {
    mapScale = 1.0;
    document.getElementById('mapWrapper').style.setProperty('--map-scale', mapScale);
}

// 画面右上のデジタル時計を更新する関数です
function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    const clockElement = document.getElementById('digitalClock');
    if (clockElement) clockElement.textContent = `${h}:${m}:${s}`;
}

// このファイルの最終更新日時を表示する関数です
function displayLastModified() {
    const lastMod = new Date(document.lastModified);
    const y = lastMod.getFullYear();
    const m = String(lastMod.getMonth() + 1).padStart(2, '0');
    const d = String(lastMod.getDate()).padStart(2, '0');
    const hh = String(lastMod.getHours()).padStart(2, '0');
    const mm = String(lastMod.getMinutes()).padStart(2, '0');
    const lastUpdatedElement = document.getElementById('lastUpdated');
    if (lastUpdatedElement) {
        lastUpdatedElement.textContent = `更新日時：${y}/${m}/${d} ${hh}:${mm}`;
    }
}

// ---------------- 以下、検索機能系の処理 ----------------

// 検索を高速に行うため、事前にデータを整理してリストアップする関数です
function buildArtistSearchData() {
    const baseNameMap = new Map(); 
    fullArtistData = [];

    function getBaseName(name) {
        return name.replace(/([ぁ-んァ-ヶ一-龥]|\))(\d+)$/, '$1');
    }

    Object.keys(timetableData).forEach(dayKey => {
        const dayInfo = timetableData[dayKey];
        const dayLabel = APP_CONFIG.days.find(d => d.id === dayKey)?.label || dayKey;

        stagesInfo.forEach(stage => {
            if (dayInfo[stage.id]) {
                dayInfo[stage.id].forEach(artist => {
                    const cleanNameForSearch = artist.name.split('<br>')[0].trim();
                    const baseName = getBaseName(cleanNameForSearch);
                    
                    if (!baseNameMap.has(baseName)) {
                        baseNameMap.set(baseName, []);
                    }
                    baseNameMap.get(baseName).push({
                        originalArtist: artist, stage: stage, dayKey: dayKey,
                        dayLabel: dayLabel, startMin: timeToMins(artist.start)
                    });
                });
            }
        });
    });

    baseNameMap.forEach((artistsGroup, baseName) => {
        const originalNames = artistsGroup.map(item => item.originalArtist.name.split('<br>')[0].trim());
        const yomi = artistYomiDict[baseName] || artistYomiDict[originalNames[0]] || baseName;
        
        fullArtistData.push({
            searchName: baseName,
            originalNames: originalNames,
            normYomi: normalizeForSearch(yomi),
            normName: normalizeForSearch(baseName),
            artistsGroup: artistsGroup, 
            dayKey: artistsGroup[0].dayKey,
            dayLabel: artistsGroup[0].dayLabel,
            startMin: Math.min(...artistsGroup.map(item => timeToMins(item.originalArtist.start))) 
        });
    });

    fullArtistData.sort((a, b) => {
        const yomiA = artistYomiDict[a.searchName] || a.searchName;
        const yomiB = artistYomiDict[b.searchName] || b.searchName;
        return yomiA.localeCompare(yomiB, 'ja');
    });
}

// 検索ボックスに文字が入力された時の動きを設定する関数です
function setupSearch() {
    buildArtistSearchData();
    const searchInput = document.getElementById('artistSearchInput');
    const suggestList = document.getElementById('searchSuggestList');
    const modalOverlay = document.getElementById('searchModalOverlay');
    const modalClose = document.getElementById('searchModalClose');

    searchInput.addEventListener('input', function() {
        const query = normalizeForSearch(this.value.trim());
        suggestList.innerHTML = '';

        if (query.length === 0) {
            // クラスを外して非表示にします
            suggestList.classList.remove('is-active');
            return;
        }

        const matchedItems = fullArtistData.filter(item => item.normYomi.startsWith(query) || item.normName.startsWith(query));

        if (matchedItems.length > 0) {
            matchedItems.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.searchName; 
                li.addEventListener('mousedown', () => {
                    searchInput.value = item.searchName; 
                    suggestList.classList.remove('is-active');
                    showSearchResults(item.searchName);
                });
                suggestList.appendChild(li);
            });
            // クラスを付けて表示します
            suggestList.classList.add('is-active');
        } else {
            suggestList.classList.remove('is-active');
        }
    });

    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const queryText = this.value.trim();
            if (queryText.length > 0) {
                suggestList.classList.remove('is-active');
                showSearchResults(queryText);
                this.blur(); 
            }
        }
    });

    modalClose.addEventListener('click', closeSearchModal);
    modalOverlay.addEventListener('click', closeSearchModal);
}

// 検索結果のポップアップを閉じる関数です
function closeSearchModal() {
    // スタイルを直接書き換えず、クラスを外すことでCSSに非表示を任せます
    document.getElementById('searchModal').classList.remove('is-active');
    document.getElementById('searchModalOverlay').classList.remove('is-active');
    const searchInput = document.getElementById('artistSearchInput');
    const suggestList = document.getElementById('searchSuggestList');
    searchInput.value = '';
    suggestList.classList.remove('is-active');
    suggestList.innerHTML = '';
}

// 分を「〇時間〇分」という文字に変換する関数です
function formatDiffTime(mins) {
    if (mins >= 60) {
        const h = Math.floor(mins / 60);
        const m = mins % 60;
        return `${h}時間${m}分`;
    } else {
        return `${mins}分`;
    }
}

// 「演奏開始まであと何分」を計算してHTMLを作る関数です
function getArtistTimeStatusHtml(artist, dayDateStr) {
    if (!artist.start) return "";
    const now = new Date();
    
    let [sh, sm] = artist.start.split(':').map(Number);
    let startDayOffset = 0;
    if (sh >= 24) { sh -= 24; startDayOffset = 1; }
    
    let startDate = new Date(dayDateStr);
    startDate.setDate(startDate.getDate() + startDayOffset);
    startDate.setHours(sh, sm, 0, 0);
    
    let endDate = null;
    if (artist.end) {
        let [eh, em] = artist.end.split(':').map(Number);
        let endDayOffset = 0;
        if (eh >= 24) { eh -= 24; endDayOffset = 1; }
        endDate = new Date(dayDateStr);
        endDate.setDate(endDate.getDate() + endDayOffset);
        endDate.setHours(eh, em, 0, 0);
    }

    const diffMs = startDate - now;
    const diffMins = Math.floor(diffMs / 60000);

    if (endDate) {
        const endDiffMs = endDate - now;
        const endDiffMins = Math.floor(endDiffMs / 60000);

        if (diffMins > 0) {
            const timeStr = formatDiffTime(diffMins);
            const numClass = diffMins < 10 ? "is-urgent" : "";
            return `<div class="search-time-status">演奏前：開始まであと<span class="${numClass}">${timeStr}</span></div>`;
        } else if (endDiffMins > 0) {
            const timeStr = formatDiffTime(endDiffMins);
            return `<div class="search-time-status is-urgent">演奏中：終了まであと${timeStr}</div>`;
        } else {
            return `<div class="search-time-status">演奏終了</div>`;
        }
    } else {
        if (diffMins > 0) {
            const timeStr = formatDiffTime(diffMins);
            const numClass = diffMins < 10 ? "is-urgent" : "";
            return `<div class="search-time-status">演奏前：開始まであと<span class="${numClass}">${timeStr}</span></div>`;
        } else {
            return ``; 
        }
    }
}

// 検索結果のポップアップ画面を作る関数です
function showSearchResults(searchText) {
    const query = normalizeForSearch(searchText.trim());
    if (!query) return;

    const results = fullArtistData.filter(item => 
        item.normYomi.startsWith(query) || 
        item.normName.startsWith(query) ||
        item.originalNames.some(orig => normalizeForSearch(orig).startsWith(query))
    );
    
    results.sort((a, b) => {
        if (a.dayKey !== b.dayKey) return a.dayKey.localeCompare(b.dayKey);
        return a.startMin - b.startMin;
    });

    const contentArea = document.getElementById('searchModalContent');
    contentArea.innerHTML = '';
    
    const ui = APP_CONFIG.ui;
    document.getElementById('searchModalTitle').textContent = `${ui.searchModalTitlePrefix}${searchText}${ui.searchModalTitleSuffix}`;

    if (results.length === 0) {
        contentArea.innerHTML = `<div class="search-empty-msg">${ui.searchEmptyMsg}</div>`;
        return;
    }

    const totalArtists = results.reduce((sum, item) => sum + item.artistsGroup.length, 0);
    
    if (totalArtists === 1) {
        const targetGroup = results[0].artistsGroup[0];
        const artist = targetGroup.originalArtist;
        const dayDate = timetableData[targetGroup.dayKey].date;
        const statusHtml = getArtistTimeStatusHtml(artist, dayDate);
        contentArea.innerHTML = statusHtml; 
    } else if (totalArtists > 1) {
        const statusHtml = `<div class="search-time-status">複数時間帯が存在するためカウントダウン対象外</div>`;
        contentArea.innerHTML = statusHtml;
    }

    results.forEach(item => {
        item.artistsGroup.forEach((groupItem, index) => {
            const artist = groupItem.originalArtist;
            const stage = groupItem.stage;
            const dayKey = groupItem.dayKey;
            
            const favId = getFavId(dayKey, stage.id, artist.name);
            const isFav = favorites[favId];
            const dayLabel = APP_CONFIG.days.find(d => d.id === dayKey)?.label || dayKey;
            const timeText = artist.end ? `${formatTimeDisplay(artist.start)}-${formatTimeDisplay(artist.end)}` : `${formatTimeDisplay(artist.start)}-`;

            // 公式HPのURLを取得します
            const officialUrl = artistLinkDict[item.searchName] || "公式HP無し";
            
            let spotifyHtml = "";
            if (index === item.artistsGroup.length - 1) {
                const spotifyUrl = artistSpotifyDict[item.searchName] || "Spotify無し";
                if (spotifyUrl !== "Spotify無し") {
                    spotifyHtml = `
                        <div class="spotify-embed-container">
                            <iframe class="spotify-embed-iframe" src="${spotifyUrl}" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                    `;
                } else {
                    spotifyHtml = `
                        <div class="spotify-empty-msg">【Spotify無し】</div>
                    `;
                }
            }

            const classes = ['artist-block', isFav ? 'favorited' : '', artist.isLightBg ? 'is-light-bg' : ''].filter(Boolean).join(' ');

            const html = `
                <div class="${classes}" style="--artist-bg: ${stage.color};">
                    <div class="artist-top">
                        <span class="artist-time">${dayLabel} ${timeText} <span class="artist-stage-name">${stage.name}</span></span>
                        <button class="fav-btn ${isFav ? 'active' : ''}" data-fav-id="${favId}">★</button>
                    </div>
                    <div class="artist-name">
                        <a href="${officialUrl !== '公式HP無し' ? officialUrl : '#'}" 
                           class="artist-official-link ${officialUrl === '公式HP無し' ? 'no-link' : ''}" 
                           data-url="${officialUrl}" 
                           target="${officialUrl !== '公式HP無し' ? '_blank' : '_self'}" 
                           rel="noopener noreferrer">
                           ${artist.name}
                        </a>
                    </div>
                </div>
                ${spotifyHtml}
            `;
            contentArea.insertAdjacentHTML('beforeend', html);
        });
    });

    // スタイルを直接書き換えず、クラスを付与することでCSSに表示を任せます
    document.getElementById('searchModalOverlay').classList.add('is-active');
    document.getElementById('searchModal').classList.add('is-active');
}

// --- ページが読み込まれたときに最初に動く処理 ---
window.addEventListener('DOMContentLoaded', () => {
    applyAppConfig(); // まず初めにHTMLの空箱に文字やボタンを流し込みます
    setupEventListeners(); // ボタンが作られた後で、クリックした時の動きを設定します
    setupSearch();

    // 前回閉じた時のタブを記憶していればそこを開き、なければDay1を開きます
    const lastTab = localStorage.getItem(LAST_TAB_KEY) || (APP_CONFIG.days[0] ? APP_CONFIG.days[0].id : 'food');
    switchTab(lastTab); 

    renderFoodSection();
    displayLastModified();
    
    updateClock();
    setInterval(updateClock, 1000); 
    setInterval(updateCurrentTimeLine, 60000); 

    const memoTextArea = document.getElementById('memoTextArea');
    if (memoTextArea) {
        const savedMemo = localStorage.getItem(MEMO_KEY) || '';
        memoTextArea.value = savedMemo;
        memoTextArea.addEventListener('input', () => {
            localStorage.setItem(MEMO_KEY, memoTextArea.value);
        });
    }

    const weatherIframe = document.querySelector('#weatherOnlineContent iframe');
    if (weatherIframe) {
        weatherIframe.addEventListener('load', () => {
            const weatherSection = document.getElementById('weatherSection');
            if (weatherSection && weatherSection.classList.contains('active')) {
                setTimeout(() => {
                    weatherSection.scrollTop = 0;
                }, 100);
            }
        });
    }
    
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .catch(err => console.error('SW登録失敗:', err));
    }
});