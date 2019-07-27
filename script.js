// 입력된 방명록을 화면에 업데이트 해준다.
function memoUpload() {
    let text  = document.getElementById("memo").value;
    if (text.length > 400) {
        window.alert("방명록은 400자를 초과할 수 없습니다.");
    }
    else if (text.length === 0) {
        window.alert("방명록을 작성해 주세요.");
    }
    else {
        let currentTime = new Date();
        let time = `${currentTime.getFullYear()}-${currentTime.getMonth()}-${currentTime.getDate()}`;
        let memoList = document.getElementById("memo-list").innerHTML;
        if (memoList === "") { memoList = "<hr>" }
        memoList += `
            <div class="guest-memo">${text}<br>
            <span class="memo-date">${time}</span>
            </div><hr>`; 
        document.getElementById("memo-list").innerHTML = memoList;
        document.getElementById("memo").value = "";
    }
}

// 방명록의 길이를 확인하고 하단에 방명록 길이를 표시한다.
function countLength() {
    let text = document.getElementById("memo").value;
    viewLen = document.getElementById("memo-len");
    viewLen.innerHTML = text.length;
}

// 화면이 랜딩페이지를 벗어나면 navigation bar를 수정한다.
function stickyNav() {
    let nav = document.getElementById("nav-bar");
    let landingHeight = document.getElementById("title").offsetHeight - 64;
    if (landingHeight < document.scrollingElement.scrollTop) {
        nav.classList.add("down-nav");
    }
    else {
        nav.classList.remove("down-nav");
    }
}

// 화면 로딩 시 navigation bar의 디자인을 확인한다.
stickyNav();

// 필요한 element들 선언한다.
let guestBook = document.getElementById("guest-book");
let uploadBtn = document.getElementById("upload-btn");
let categories = document.getElementsByClassName("nav-category");


// 호출한 element들에 event listner를 적용한다.
guestBook.addEventListener('keyup', () => countLength());
uploadBtn.addEventListener('click', () => memoUpload());
document.addEventListener('scroll', () => stickyNav());
for (category of categories) {
    category.addEventListener('click', () => stickyNav());
}