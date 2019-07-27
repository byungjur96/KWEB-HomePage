let guestMemo = document.getElementById("guest-memo");
let uploadBtn = document.getElementById("upload-btn");

function countLength() {
    let text = document.getElementById("memo").value;
    viewLen = document.getElementById("memo-len");
    viewLen.innerHTML = text.length;
}

function memoUpload() {
    let text  = document.getElementById("memo").value;
    if (text.length > 400) {
        window.alert("방명록은 400자를 초과할 수 없습니다.");
    }
    else {
        addMemo(text);
        document.getElementById("memo").value = "";
        countLength();
    }
}

function addMemo(text) {
    let currentTime = new Date();
    let time = `${currentTime.getFullYear()}-${currentTime.getMonth()}-${currentTime.getDate()}`;
    let memoList = document.getElementById("memo-list").innerHTML;
    if (memoList === "") { memoList = "<hr>" }
    memoList += `
        <div class="guest-memo">${text}<br>
        <span class="memo-date">${time}</span>
        </div><hr>`;
    document.getElementById("memo-list").innerHTML = memoList;
}

guestMemo.addEventListener('keyup', () => countLength());
uploadBtn.addEventListener('click', () => memoUpload());