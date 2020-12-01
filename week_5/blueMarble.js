// 플레이어 턴에 취할 수 있는 액션 
// - 주사위 던지기 (더블이면 한 번 더)
// - 주사위 수 만큼 움직이기 
// - 움직인 땅에 따라서 (
//                      일반 도시인데 주인없으면 땅 & 건물 사거나 안사기 / 
//                      일반 도시인데 주인있으면 건물 타입 따라 주인에게 돈주기 / 
//                      건물없는 땅인데 주인없으면 땅 사거나 안사기 /
//                      건물없는 땅인데 주인있으면 주인에게 돈주기 /
//                      특별지역이면 해당 이펙트 당하기 /
//                      황금열쇠면 황금열쇠 이펙트 실행하기 /
//                      )
const diceButton = document.getElementById('diceButton');
const diceResult = document.querySelector(".diceResult");

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
    let firstDice = Math.floor( ( Math.random() * (4 - 1) + 1 ));
    let secondDice = Math.floor( ( Math.random() * (4 - 1) + 1 ));
   

    if(firstDice === secondDice) {
        let dice = firstDice + secondDice;
        let finalDice = dice + rollDice();
        return finalDice;
    } else {
        let dice = firstDice + secondDice;
        return dice;
    }
}


function handleEvent() {
    diceButton.addEventListener("click", showDiceResult);
}


// function testFunction() {
//     console.log("주사위가 던져졌습니다.");
// }

function showDiceResult() {
    const result = rollDice();


        diceResult.innerText = result;
    
    console.log("주사위 결과는" + result);
}


// 플레이어 이동하기 (주사위 던진 플레이어)
function movePlayer(player) {
    player.position += rollDice();
}


function init() {
    randomizeTurn();
    handleEvent();
    // 버튼(주사위) 이벤트

    
    //  버튼누를 때 마다 / players 배열의 순서대로 / movePlayer(player) 함수 실행
}



window.onload = init();