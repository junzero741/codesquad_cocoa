// rest 파라미터 구문은 정해지지 않은 수 (an indefinite number, 부정수) 인수를
// 배열로 나타낼 수 있게 한다.


// 기본 구문
[a1, a2, ...rest_a] = [1,2,3,4,5,6,7,8,9];
// console.log(a1);    //1
// console.log(a2);    //2
// console.log(rest_a);// [3, 4, 5, 6, 7, 8, 9]




//예제 1 {인자 전부 더하기}
function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
        return previous + current;
    });
}
// console.log(sum(1,2,3)); // 6
// console.log(sum(1,2,3,4)); // 10



//예제 2 {마지막 파라미터만 rest 파라미터가 될 수 있다.}
function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
}
// myFun("one", "two", "three", "four", "five", "six");


//예제 3 {rest 파라미터 해체.}
function f(...[a,b,c]) {
    return a + b + c;
}
f(1);   // NaN
f(1,2,3);   // 6
f(1,2,3,4); // 6 (4 번째 파라미터는 해체되지 않음)



//예제 4 {인자가 배열이므로, 엘리먼트의 수를 얻을 수 있다}
function fun1(...theArgs) {
    // console.log(theArgs.length);
}
fun1(); // 0
fun1(5); // 1
fun1(5,6,7); // 3


//예제 5 {첫 번째 파라미터와 곱해서 배열로 반환하기}
function multiply(multiplier, ...theArgs) {
    return theArgs.map(function(element) {
        return multiplier * element;
    });
}
const arr = multiply(2, 1, 2, 3);
// console.log(arr); // [2, 4, 6]


//예제 6 {arguments 정렬하기} => rest 파라미터 활용
function sortRestArgs(...theArgs) {
    let sortedArgs = theArgs.sort();
    return sortedArgs;
}
// console.log(sortRestArgs(1,6,3,2));     // 1, 2, 3, 6



//예제 7 {arguments 정렬하기} => array 로 변환해서
function sortArguments() {
    const args = Array.from(arguments);
    const sortedArgs = args.sort();
    return sortedArgs;
}
// console.log(sortArguments(5, 3, 7, 1));     // 1, 3, 5, 7