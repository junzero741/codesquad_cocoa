memoryObj = {
    memory : [],
    resultMemory : []
}


function getArea(polygon, value1, value2, value3) {

    let answer;
    let sum = 0;
   
    if(polygon === 'circle'){

        answer = (value1 * value1) * Math.PI;   //12.56         40.82
        

          while(value1 <= value2) {
            answer = (value1 * value1) * Math.PI;
            sum += answer;                   // 12.56 + 28.26    
            value1++;                           // 2 -> 3
        }
    }

    if(polygon === 'rect'){
        answer = value1 * value2;
    }

    if(polygon === 'trapezoid'){
        answer = (value1 + value2) * value3 / 2;
    }

    if(sum != 0) {
        answer = sum;
    }
    
    memoryObj.memory.push("getArea");
    memoryObj.resultMemory.push(answer);
  
}


function printExecutionSequence() {

        memoryObj.memory.push("printExecutionSequence")

    for(var i = 0; i < memoryObj.memory.length; i++){
        console.log("function : " + memoryObj.memory[i]);
        console.log("result : " + memoryObj.resultMemory[i]);
    }
}


getArea('circle', 2);
getArea('rect', 2, 3);
getArea('trapezoid', 10, 15, 12);
getArea('circle', 2, 3);
printExecutionSequence()