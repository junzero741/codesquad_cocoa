
const numbers = [5, 0, 2, 7];

function solution(numbers) {

    let answer = [];              

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < numbers.length; j++) {

            if(i === j) {
                continue;
            } else {
                answer.push(numbers[i] + numbers[j]);
            }
           
        }
    }

    answer = Array.from(new Set(answer));
    answer = answer.sort(function(a,b) {
        return a - b;
    });


    return answer;
}


console.log(solution(numbers));