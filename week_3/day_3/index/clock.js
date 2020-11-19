const clock = document.querySelector("h1");

function getTime() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    clock.innerText = 
    `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`;
}


function init() {
    const BY_SECOND = 1000;
    setInterval(getTime, BY_SECOND);
}

init();