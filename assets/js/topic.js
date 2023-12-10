function loadNotes() {
    // 將 iframe 的 src 設置為筆記的 HTML 文件
    document.getElementById('contentFrame').src = './note.html';
}

function loadProblems() {
    // 將 iframe 的 src 設置為題目的 HTML 文件
    document.getElementById('contentFrame').src = './problem.html';
}

