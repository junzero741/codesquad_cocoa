
const X = -123;

var reverse = function (x) {
    let str = x.toString();
    let strArr = str.split("");
    let newArr = strArr.reverse();

    const lastElement = newArr[newArr.length-1];

    if(lastElement === "-") {
        const minus = newArr.pop();
        newArr.unshift(minus);
    }

    if(newArr.length > 1 && newArr[0] === "0") {
        newArr.splice(0,1);
    }

    let newStr = newArr.join('');

    newNum = Number(newStr);
    if(newNum <= Math.pow(-2,31) || newNum >= Math.pow(2,31) ) {
        return 0;
    }
    return newNum;
};


reverse(X);