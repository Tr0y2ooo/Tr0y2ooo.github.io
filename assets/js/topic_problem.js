function loadHTML(url) {
    var htmlFrame = document.getElementById('htmlFrame');
    htmlFrame.src = url;
}

var currentURL = window.location.href;

// 使用URL构造函数解析当前页面的URL
var urlObject = new URL(currentURL);

// 获取文件名
var fileName = urlObject.pathname.split('/').pop();

function toggleNoteProblem(filename) {
    // 将 "note" 替换为 "problem"，将 "problem" 替换为 "note"
    return filename.replace("note", "temp").replace("problem", "note").replace("temp", "problem");
}

var newFilename = toggleNoteProblem(fileName);

function navigateToAnotherPage() {
    window.location.href = './'+newFilename; // 替换为你想要跳转的页面的文件名
}

function showRandomProblem() {
    // 隨機選擇問題編號（1到15之間的數字）
    var randomProblemNumber = Math.floor(Math.random() * 15) + 1;

    // 構建問題文件的路徑
    var problemPath = './problems/q' + randomProblemNumber + '.html';

    // 載入隨機選擇的問題
    loadHTML(problemPath);
}