



function solution(radix, digit, peopleNum) {
  
    let numberStackArr = [];
    let playerA = [];
    let playerB = [];
    
    
        for(let i = 0; i.toString([radix]).length < digit; i++ ){
            numberStackArr.push(i.toString([radix]));  
        }
        
        let numberStackStr = numberStackArr.join();
        let gameConsole = numberStackStr.split("");
     
        for(let i = 0; i < gameConsole.length; i++){
            if(gameConsole[i] === ",") {
               gameConsole.splice(i,1);
            }
        }
        // console.log(gameConsole);

        let numOfTurn = gameConsole.length / peopleNum; // 미리 구할 숫자의 개수 
        
        for(let i = 0; i < gameConsole.length; i++) {
            if((i + 2) % peopleNum === 0) {
                playerA.push(gameConsole[i]);
            } else {
                playerB.push(gameConsole[i]);
            }
            
        }

   console.log(playerB);
}

solution(16,3,10);

