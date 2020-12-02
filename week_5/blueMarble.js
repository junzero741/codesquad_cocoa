const diceButton = document.getElementById('diceButton');
const diceResult = document.querySelector(".diceResult");
const player_1_Horse = document.getElementById('player_1_horse');
const player_2_Horse = document.getElementById('player_2_horse');
const player_3_Horse = document.getElementById('player_3_horse');
const player_4_Horse = document.getElementById('player_4_horse');
const player_1_status = document.querySelector(".player_1");
const player_2_status = document.querySelector(".player_2");
const player_3_status = document.querySelector(".player_3");
const player_4_status = document.querySelector(".player_4");


const playerStatusArr = [player_1_status, player_2_status, player_3_status, player_4_status];
let turn = 0;
let globalDiceResult;       // 주사위 결과값은 쓸 데가 많다.


// 플레이어 생성자 함수
function Player(name, money, position) {
    this.name = name;
    this.money = money;
    this.position = position;
}


const player_1 = new Player("goody", 5000000, 0);
const player_2 = new Player("autumn", 5000000, 0);
const player_3 = new Player("beemo", 5000000, 0);
const player_4 = new Player("dico", 5000000, 0);
const players = [player_1, player_2, player_3, player_4];


function randomizeTurn() {
    players.sort(function () {
        return Math.random() - Math.random();
    });
}


function rollDice() {
    let firstDice = Math.floor((Math.random() * (4 - 1) + 1));
    let secondDice = Math.floor((Math.random() * (4 - 1) + 1));

    if (firstDice === secondDice) {
        let dice = firstDice + secondDice;
        let finalDice = dice + rollDice();
        return finalDice;
    } else {
        let dice = firstDice + secondDice;
        return dice;
    }
}


function handleEvent() {
    diceButton.addEventListener("click", movePlayer);
    diceButton.addEventListener("click", paintStatus);
}


function paintStatus() {

    if(turn >= 4) {
        turn = 0;
    }
    if(playerStatusArr[turn].style.backgroundColor === "white") {
        playerStatusArr[turn].style.backgroundColor = "coral";
    } else {
        playerStatusArr.forEach(element => element.style.backgroundColor = "white");
    }
}


function showDiceResult() {
    const result = rollDice();
    diceResult.innerText = result;
    console.log(players);
    globalDiceResult = result;
    return result;
}


function movePlayer() {
    if (turn >= 0 && turn < 4) {
        players[turn].position += showDiceResult();
        initPos();
        movePlayerHorse();
        paintStatus();
        turn++;
    } else {
        turn = 0;
        paintStatus();
        movePlayer();
        
    }

}


function updateStatus() {
    const animalArr = ["🐱", "🐼", "🦊", "🐵"];

    for(let i = 0; i < 4; i++) {
        playerStatusArr[i].innerText = animalArr[i] + players[i].name;
    }
}


function initPos() {
    if (players[turn].position > 19) {
        players[turn].position -= 20;
    }
}


function movePlayerHorse() {
    if (turn === 0) {
        player_1_Horse.style.left = cities[players[turn].position].offsetLeft + "px";
        player_1_Horse.style.top = cities[players[turn].position].offsetTop + "px";
    }

    if (turn === 1) {
        player_2_Horse.style.left = cities[players[turn].position].offsetLeft + 20 + "px";
        player_2_Horse.style.top = cities[players[turn].position].offsetTop + "px";
    }

    if (turn === 2) {
        player_3_Horse.style.left = cities[players[turn].position].offsetLeft + 30 + "px";
        player_3_Horse.style.top = cities[players[turn].position].offsetTop + "px";
    }

    if (turn === 3) {
        player_4_Horse.style.left = cities[players[turn].position].offsetLeft + 40 + "px";
        player_4_Horse.style.top = cities[players[turn].position].offsetTop + "px";
    }
}


function init() {
    handleEvent();
    randomizeTurn();
    updateStatus();
   
}

window.onload = init();




/*-------------------------------도시들 변수 선언------------------------------*/
const start = document.getElementById("start"),
    taipei = document.getElementById("taipei"),
    hongkong = document.getElementById("hongkong"),
    maynila = document.getElementById("maynila"),
    singapore = document.getElementById("singapore"),
    uninhabitedIsland = document.getElementById("uninhabitedIsland"),
    istanbul = document.getElementById("istanbul"),
    copenhagen = document.getElementById("copenhagen"),
    zurich = document.getElementById("zurich"),
    berlin = document.getElementById("berlin"),
    getSocialWelfareFund = document.getElementById("getSocialWelfareFund"),
    sydney = document.getElementById("sydney"),
    lisbon = document.getElementById("lisbon"),
    madrid = document.getElementById("madrid"),
    paris = document.getElementById("paris"),
    spaceStation = document.getElementById("spaceStation"),
    roma = document.getElementById("roma"),
    london = document.getElementById("london"),
    newyork = document.getElementById("newyork"),
    paySocialWelfareFund = document.getElementById("paySocialWelfareFund");

const cities = [start, taipei, hongkong, maynila, singapore, uninhabitedIsland,
    istanbul, copenhagen, zurich, berlin, getSocialWelfareFund,
    sydney, lisbon, madrid, paris, spaceStation,
    roma, london, newyork, paySocialWelfareFund];