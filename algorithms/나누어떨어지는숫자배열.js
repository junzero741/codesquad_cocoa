const arr = [3, 2, 6];
const divisor = 10;
let answer = [];



for(let i = 0; i < arr.length; i++) {
    if(arr[i] % divisor === 0) {
        answer.push(arr[i]);
    }
}

if (answer.length === 0) {
    answer.push(-1);
}


answer = answer.sort(function(a, b) {
    return a - b;
});

console.log(answer);
