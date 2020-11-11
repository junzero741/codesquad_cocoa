// 1. 괄호(소괄호나 중괄호, 대괄호)가 아닌 모든 문자는 무시하고 넘어간다.
// 2. 여는 괄호가 나오면 스택에 푸시한다. 스택에 넣는다는 것은 이 괄호가 닫히기를 기다린다는 의미다.
// 3. 닫는 괄호가 나오면 스택 위에 원소를 확인한다. 그리고 다음처럼 분석한다.
//      ㄴ 스택에 원소가 없으면 닫는 괄호에 대응하는 여는 괄호가 앞에 나오지 않은 것이다.
//      ㄴ 스택에 데이터가 있다면, 닫는 괄호가 스택 위에 있는 원소와 괄호 종류가 다른지 확인한다.
//      ㄴ 닫는 괄호가 스택 위에 있는 원소와 괄호 종류가 같으면 여는 괄호를 성공적으로 닫았다는 뜻이다. 이 괄호는 더 이상 기록할 필요가 없으므로 스택 위 원소를 팝한다.
// 4. 줄 끝에 도달했는데 스택에 여전히 남아있는 괄호가 있다면 여는 괄호에 대응하는 닫는 괄호가 없다는 의미다. 


// stack의 length가 0인 경우: 깊이 수준은 n, 원소 개수는 6개 입니다.
// stack의 length가 0이 아닌 경우: 닫는 괄호가 일치하지 않습니다.


const data_1 = "[1,2,[3,4,[5,[6]]]]";   //괄호 수가 일치할 경우
const data_2 = "[1,2,[3,4,[5,[6]]";     //여는괄호가 더 많은경우
const data_3 = "[1,2,3,4,5,[6]]]";      //닫는괄호가 더 많은경우

class Linter {
    constructor() {
        this.stack = [];
        this.bracketCount = 0;
        this.openBracketCount = 0;
    }



    // 주어진 데이터(스트링)을 콤마없는 배열 객체로 리턴
    dataToArray(data) {
        let dataArr = Array.from(data);

        for (let i = 0; i < dataArr.length; i++) {
            if (dataArr[i] === ",") {
                dataArr.splice(i, 1);
            }
        }

        return dataArr;
    }


      // 주어진 데이터(스트링)의 원소 개수 리턴 (bracket 제외)
      elementNum(data) {
        let elemCount  = data.length - (this.openBracketCount * 2);
        return elemCount;
    }

    // 주어진 배열의 원소중에 "[" 가 있는지 검사하여 stack 배열에 해당 원소 푸시
    openBracketCheck(data) {

        for (let i = 0; i < data.length; i++) {
            if (data[i] === "[") {
                this.stack.push(data[i]);
                this.bracketCount++;
                this.openBracketCount++;
            }
        }
    }


    // dataArr 배열의 "]" 개수만큼 stack 배열을 하나씩 팝하여 stack 배열의 길이를 리턴
    closeBracketCheck(data) {

        for (let i = 0; i < data.length; i++) {
            if (data[i] === "]") {
                this.stack.pop()
                this.bracketCount--; 
            }
        }

        return this.bracketCount;
    }


    // stack 배열의 길이가 0이면 true 를 리턴, 0 이상이면 false를 리턴
    isStackEmpty(data) {

        let answer = false;

        if (this.closeBracketCheck(data) === 0) {
            answer = true;
        } else {
            answer = false;
        }

        return answer;
    }

    // stack의 length가 0인 경우: 깊이 수준은 n, 원소 개수는 6개 입니다.
    // isStackEmpty의 결과가 true면 깊이 수준과 원소 개수를 리턴, false면 "닫는 괄호가 일치하지 않습니다" 문자열 출력
    printAnswer(data) {


        if (this.isStackEmpty(data) === true) {
            console.log("깊이 수준은 " + this.openBracketCount + ", 원소 개수는 " + this.elementNum(data) + "입니다.");
        } else {
            if(this.bracketCount > 0) {
                console.log("여는 괄호가 더 많습니다.");
            } else if(this.bracketCount < 0) {
                console.log("닫는 괄호가 더 많습니다.");
            }
            
        }
    }


    run(data) {
        let dataArr = this.dataToArray(data);

        this.openBracketCheck(dataArr);
        this.printAnswer(dataArr);
        
        // 테스트 다양화를 위해 초기화
        this.openBracketCount = 0;
        this.bracketCount = 0;
        this.stack = [];
    }
}

let test = new Linter;

test.run(data_1);
test.run(data_2);
test.run(data_3);