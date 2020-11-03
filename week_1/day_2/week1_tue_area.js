memoryObj = {
    memory : [],
    resultMemory : []
}


function getArea(polygon, value1, value2, value3) {

    let area;
    let sum = 0;
   
    if(polygon === 'circle'){

        area = (value1 * value1) * Math.PI;   
        

          while(value1 <= value2) {
            area = (value1 * value1) * Math.PI;
            sum += area;                     
            value1++;                           
        }

        if(sum != 0) {
            area = sum;
        }
    }

    if(polygon === 'rect'){
        area = value1 * value2;
    }

    if(polygon === 'trapezoid'){
        area = (value1 + value2) * value3 / 2;
    }


    memoryObj.memory.push("getArea");
    memoryObj.resultMemory.push(area);
  
}


function printExecutionSequence() {

        memoryObj.memory.push("printExecutionSequence")

    for(var i = 0; i < memoryObj.memory.length; i++){

        console.log("function : " + memoryObj.memory[i]);

        if(memoryObj.resultMemory[i] === undefined) {
            console.log("result : 출력값 없음");
        } else {
            console.log("result : " + memoryObj.resultMemory[i]);
        }
    }
}


getArea('circle', 2);
getArea('rect', 2, 3);
getArea('trapezoid', 10, 15, 12);
getArea('circle', 2, 5);
printExecutionSequence()