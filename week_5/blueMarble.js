// 플레이어 턴에 취할 수 있는 액션 
// - 주사위 던지기 (더블이면 한 번 더)
// - 주사위 수 만큼 움직이기 
// - 움직인 땅에 따라서 (
//                      일반 도시인데 주인없으면 땅 & 건물 사거나 안사기 / 
//                      일반 도시인데 주인있으면 건물 타입 따라 주인에게 돈주기 / 
//                      특별지역이면 해당 이펙트 당하기 /
//                      )


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


let turn = 0;
let globalDiceResult;

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


// 플레이어 순서 랜덤 지정 
function randomizeTurn() {
    players.sort(function () {
        return Math.random() - Math.random();
    });
}


// 주사위 던지기 (1등부터 순서대로)
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
}



function showDiceResult() {
    const result = rollDice();
    diceResult.innerText = result;
    console.log("주사위 결과는" + result);
    globalDiceResult = result;
    return result;
}


// 플레이어 이동하기 (주사위 던진 플레이어)
function movePlayer() {
    if (turn >= 0 && turn < 4) {
        players[turn].position += showDiceResult();
        initPos();
        movePlayerHorse();
        turn++;
    } else {
        turn = 0;
        movePlayer();
    }

}


function updateStatus() {
    const playersArr = [player_1_status, player_2_status, player_3_status, player_4_status];
    const animalArr = ["🐱", "🐼", "🦊", "🐵"];

    for(let i = 0; i < 4; i++) {
        playersArr[i].innerText = animalArr[i] + players[i].name;
    }
}

// 플레이어 position 이 19보다 커지면 0으로 초기화 (보드판이 20칸이므로)
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
        player_3_Horse.style.left = cities[players[turn].position].offsetLeft + 40 + "px";
        player_3_Horse.style.top = cities[players[turn].position].offsetTop + "px";

    }

    if (turn === 3) {
        player_4_Horse.style.left = cities[players[turn].position].offsetLeft + 70 + "px";
        player_4_Horse.style.top = cities[players[turn].position].offsetTop + "px";
    }


}


function init() {
    handleEvent();
    randomizeTurn();
    updateStatus();
   
}



window.onload = init();


//  function testFunction() {
//     console.log("");
// }



// 도시들 변수 선언//
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