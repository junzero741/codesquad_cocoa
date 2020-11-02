var memory = [];
var resultMemory = [];

function getArea(object, value1, value2, value3) {

    var sum = 0;
    var answer;
   

    if(object === 'circle'){

        answer = (value1 * value1) * Math.PI;

          while(value1 <= value2) {
            answer += answer;
            value1++;
        }
        console.log(answer);
    }


    if(object === 'rect'){
        answer = value1 * value2;
        console.log(answer);
    }

    if(object === 'trapezoid'){
        answer = (value1 + value2) * value3 / 2;
        console.log(answer);
    }

    memory.push("getArea");
    resultMemory.push(answer);
  
}

getArea('circle', 2);
getArea('rect', 2, 3);
getArea('trapezoid', 10, 15, 12);
getArea('circle', 2, 5);
printExecutionSequence()


function getCircle() {
    const CIRCLE = 10;
}


function printExecutionSequence() {

        memory.push("printExecutionSequence")

    for(var i = 0; i < memory.length; i++){
        console.log(memory[i] + "result : " + resultMemory[i]);
    }
}