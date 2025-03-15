document.getElementById('trust-button').addEventListener('click', function () {
    let audio = document.getElementById('music');
    let startScreen = document.getElementById('start-screen');
    let mainContent = document.getElementById('main-content');

    // 播放音樂
    audio.play().then(() => {
        console.log("音樂播放成功");
    }).catch(error => {
        console.log("播放失敗", error);
    });

    // 隱藏按鈕畫面
    startScreen.style.display = 'none';

    // 顯示主畫面內容
    mainContent.style.display = 'flex';

    // 啟動背景動畫
    document.body.style.animation = "bg-color-change 2s infinite alternate";

    // 開始產生隨機 GIF
    setInterval(spawnRandomGif, 1000);
});

// GIF 來源（可換成自己的）
const gifList = [
    "chiwa2.gif",
    "chiwa3.jpg",
    "chiwa4.gif",
    "chiwa5.gif",
	"chiwa6.gif"
];

// 產生隨機 GIF
function spawnRandomGif() {
    let gifContainer = document.getElementById('gif-container');
    let gif = document.createElement("img");

    gif.src = gifList[Math.floor(Math.random() * gifList.length)];
    gif.classList.add("flying-gif");

    // 設定隨機方向與位置
    let isLeft = Math.random() < 0.5;
    gif.style.setProperty("--dir", isLeft ? "1" : "-1");
    gif.style.setProperty("--randY", Math.random().toFixed(2));

    // 初始位置
    gif.style.top = `${Math.random() * 80 + 10}vh`;
    gif.style.left = isLeft ? "-200px" : "calc(100vw + 200px)";

    // 加入畫面
    gifContainer.appendChild(gif);

    // 移除 GIF 避免 DOM 過載
    setTimeout(() => gif.remove(), 3000);
}
