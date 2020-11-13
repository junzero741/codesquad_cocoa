function solution() {
    let answer = 0;
    let arr = [];
    // const n = 12;


    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            arr.push(i);
        }
    }

    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i] 
    }


    answer = sum;
    return answer;
}

console.log(solution());