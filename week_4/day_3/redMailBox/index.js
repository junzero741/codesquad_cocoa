/*----------------------------------미션 1-------------------------------- */
function renderTowns() {
    const numOfTowns = getRandomNum("town");
    for (let i = 0; i < numOfTowns; i++) {
        window.onload = createTown();
    }
}

function createTown() {
    const town = document.createElement("div");
    town.className = "town";
    renderMailbox(town);
    map.appendChild(town);
    setTownFeature(town);
    

    button.addEventListener("click", checkMailbox(town));
}


function renderMailbox(town) {
    randomNum = Math.random() * 100;
    if (randomNum < 50) {
        town.innerText = "📮";
    }
}


function setTownFeature(town) {
    town.style.position = "absolute";
    town.style.top = `${getRandomNum("pos")}px`;
    town.style.left = `${getRandomNum("pos")}px`;
    town.style.width = `${getRandomNum("size")}px`;
    town.style.height = `${getRandomNum("size")}px`;
}


function getRandomNum(type) {
    const MAXPOS = 400;
    const MINPOS = 0;
    const MAXSIZE = 400;
    const MINSIZE = 30;
    const MINTOWN = 1;
    const MAXTOWN = 26;

    if (type === "pos") {
        randomNum = Math.random() * (MAXPOS - MINPOS) + MINPOS;
    }
    if (type === "size") {
        randomNum = Math.random() * (MAXSIZE - MINSIZE) + MINSIZE;
    }
    if (type === "town") {
        randomNum = Math.random() * (MAXTOWN - MINTOWN) + MINTOWN;
    }
    return randomNum;
}





/*------------------------------------미션 2----------------------------- */

// function handleEvent(town) {
   
    
// }


function checkMailbox(town) {
    if (town.innerText === "📮") {
        console.log("우체통 있음");
        paintBorderRed(town);
    }
}


function paintBorderRed(town) {
        town.className = "town-mailbox";
}





/*------------------------------------시작 및 초기화----------------------------- */

const map = document.querySelector(".map"),
    button = document.querySelector(".button"),
    town = document.querySelectorAll(".town");

let randomNum;


function init() {
    renderTowns();
  
}

init();