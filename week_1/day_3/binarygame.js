
function solution(radix, digit, peopleNum) {
  
    let numberStackArr = [];
    
    
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
        console.log(gameConsole);

}

solution(2,4,2);
