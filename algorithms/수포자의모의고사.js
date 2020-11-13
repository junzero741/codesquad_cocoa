const answers = [1, 2, 3, 4, 5];
function solution(answers) {

    let answer = [];
    const student_1 = [1, 2, 3, 4, 5];
    const student_2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const student_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let answerCount = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === student_1[i % 5]) answerCount[0]++;
        if (answers[i] === student_2[i % 8]) answerCount[1]++;
        if (answers[i] === student_3[i % 10]) answerCount[2]++;
    }

   
    const maxCount = answerCount.reduce(function(a,b,c) {
        return Math.max(a,b,c); // 최대값
    });

  
    if (maxCount === answerCount[0]) answer.push(1);
    if (maxCount === answerCount[1]) answer.push(2);
    if (maxCount === answerCount[2]) answer.push(3);

    return answer;
}

console.log(solution(answers));





// answerCount 의 원소 중 최대값을 갖고 있는 학생 번호를 answer 배열에 넣는다.   
// 최대값이 여러개면 학생번호가 낮은 순서대로 answer 배열에 넣는다.
