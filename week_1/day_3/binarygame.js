function solution(radix, digit, peopleNum, p) {
  
    let numberStackArr = [];
    let gildong = [];
   
    
    
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

        
        for(let i = p-1; i < gameConsole.length; i+= peopleNum) {
           
                gildong.push(gameConsole[i]);
    
        }
        
        console.log(gildong); //틀렸음
    } 

    solution(2,4,2,2);