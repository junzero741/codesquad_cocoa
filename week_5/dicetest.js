function rollDice() {

    let firstDice = Math.floor( ( Math.random() * (6 - 1) + 1 ));
    let secondDice = Math.floor( ( Math.random() * (6 - 1) + 1 ));
   

    if(firstDice === secondDice) {
        let dice = firstDice + secondDice;
        let finalDice = dice + rollDice();
        return finalDice;
    } else {
        let dice = firstDice + secondDice;
        return dice;
    }
}


rollDice();