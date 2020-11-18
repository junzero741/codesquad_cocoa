// input에 텍스트 입력하면
// Welcome, 텍스트 라고 출력된다.  (여기까지 완)
// 이제 위에 input이 사라지게 해야한다.
// 그리고 currentUser에 Value가 남아있으므로
// 새로고침해도 계속 Welcome, 텍스트 가 남아있게 한다.

const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    welcomeText = document.querySelector(".js-welcome");


const currentUser = "currentUser",
    INVISIBLE_CN = "invisible",
    SHOWING_CN = "showing";



function renderWelcome() {
    const user = localStorage.getItem(currentUser);
    welcomeText.innerText = `Welcome, ${user}`;
    form.classList.remove(SHOWING_CN);
    
}


function saveName(text) {
    localStorage.setItem(currentUser, text);
}


function checkText(event) {
    event.preventDefault();
    if (input.value !== null) {
        saveName(input.value);
        renderWelcome();
    } else {
        alert("이름을 입력하세요");
    }
}


function init() {
    form.addEventListener("submit", checkText);
}


init();