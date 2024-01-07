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

function navigateToChapterReview() {
            window.location.href = '../../index.html'; // 替換 'your_target_url' 為你想要跳轉的URL
        }