// 모든 학생은 0에서 100점 사이의 점수를 받는다.

// 40 점 미만의 점수는 낙제이다.
// 낙제생들 중 38점 이상은 40점으로 올려준다.
// 그러나 38점 미만은 어차피 낙제이므로 별다른 처리를 하지 않는다.  

// 낙제가 아닌 학생들에 한하여 올림을 시켜줄 예정이다.
// 학생이 받은 점수와 다음 5배수의 차가 3 미만이면, 학생의 점수를 다음 5배수로 올림시킨다.


let originalGrades = [4, 39, 73, 38, 67, 38, 33];
let finalGrades = [];
const multiplesOfFive = [45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

function gradingStudents(grades) {
    grades.forEach(element => {
        divideGrade(element);
    });

    finalGrades.shift();
}

function divideGrade(num) {
    if (num < 40 && num > 37) {
        num = 40;
        finalGrades.push(num);
    } else {
        rounding(num);
    }

}

function rounding(num) {
    for (let i = 0; i < multiplesOfFive.length+1; i++) {
        if (num < multiplesOfFive[i] && multiplesOfFive[i] - num < 3) {
            num = multiplesOfFive[i];
        }
    }
    finalGrades.push(num);
}


function main() {
    gradingStudents(originalGrades);
}

main();
console.log(finalGrades);