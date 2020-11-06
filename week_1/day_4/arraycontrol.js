function factorial(number) {
    if (number > 0) {
        return number * factorial(number - 1);
    } else {
        return 1;
    }
}

function calculate(m) {

    let answerArr = [];
    for (let i = 1; i <= m; i++) {
        answerArr.push(factorial(i));
    }

    return answerArr;
}

calculate(4);
console.log(calculate(4));


//기대 결과 값 : [1, 2, 6, 24]
