const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    welcomeText = document.querySelector("h4");


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