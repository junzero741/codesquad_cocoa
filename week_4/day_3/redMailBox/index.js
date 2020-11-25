const map = document.querySelector(".map");
let randomNum;

function createTown() {
    const town = document.createElement("div");
    town.className = "town";
    renderMailbox(town);
    map.appendChild(town);
    setTownFeature(town);
}


function renderMailbox(town) {
    randomNum = Math.random() * 100;
    if (randomNum < 50) {
        town.innerText = "📮";
    } else {
        town.innerText = "";
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
    if (type === "pos") {
        randomNum = Math.random() * (MAXPOS - MINPOS) + MINPOS;
    }
    if (type === "size") {
        randomNum = Math.random() * (MAXSIZE - MINSIZE) + MINSIZE;
    }
    return randomNum;
}


function getNumOfTowns() {
    const MIN = 1;
    const MAX = 26;
    let randomNum = Math.random() * (MAX - MIN) + MIN;
    return randomNum;
}


function renderTowns() {
    const numOfTowns = getNumOfTowns();
    for (let i = 0; i < numOfTowns; i++) {
        window.onload = createTown();
    }
}

function init() {
    renderTowns();
}

init();