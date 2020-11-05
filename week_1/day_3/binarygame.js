function solution(radix, digit, peopleNum, turn) {

    let numberStackArr = [];
    let gildong = [];



    for (let i = 0; i.toString([radix]).length < digit; i++) {
        numberStackArr.push(i.toString([radix]));
    }

    let numberStackStr = numberStackArr.join(""); 
    let gameConsole = numberStackStr.split("");

    for (let i = turn - 1; i < gameConsole.length; i += peopleNum) {

        gildong.push(gameConsole[i]);

    }

    console.log(gildong);
}


solution(2, 4, 3, 2);