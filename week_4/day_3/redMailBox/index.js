const map = document.querySelector(".map");


function createTown() {
    const town = document.createElement("div");
    town.className = "town";
    map.appendChild(town);
    setTownFeature(town);
}


function setTownFeature(town) {
    town.style.position = "absolute";
    town.style.top = `${getRandomNum("pos")}px`;
    town.style.left = `${getRandomNum("pos")}px`;
    town.style.width = `${getRandomNum("size")}px`;
    town.style.height = `${getRandomNum("size")}px`;
}


function getRandomNum(type) {
    let randomNum;
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

function init() {
    const numOfTowns = getNumOfTowns();
    for (let i = 0; i < numOfTowns; i++) {
        window.onload = createTown();
    }
}

init();