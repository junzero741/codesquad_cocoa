

const x1 = 4523;
const v1 = 8092;
const x2 = 9419;
const v2 = 8076;

function kangaroo(x1, v1, x2, v2) {
    
    let x1JumpCnt = 0;
    let x2JumpCnt = 0;
    

    if ((x1 < x2 && v1 < v2) || (x1 > x2 && v1 > v2)) {
        return "NO";
    }


    while (x1<x2 && x2 <= 10000) {
        x1 += v1;
        x1JumpCnt++;
        x2 += v2;
        x2JumpCnt++;

        if (x1 === x2 && x1JumpCnt === x2JumpCnt) {
            return "YES"
        } else {
            continue;
        }
    }

    
            return "NO";
        
  


function main() {
    console.log(kangaroo(x1, v1, x2, v2));

}

main();