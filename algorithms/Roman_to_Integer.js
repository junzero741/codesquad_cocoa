
const str = "MCMXCIV";

var romanToInt = function (s) {
    const dic = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let total = 0;

    for(let i = 0; i < s.length; i++) {
        if(dic[s[i+1]] !== undefined) {
            if(dic[s[i]] < dic[s[i+1]]) {
                total += (dic[s[i+1]] - dic[s[i]])
                i++;
            } else {
                total += dic[s[i]];
            }
        } else {
            total += dic[s[i]];
        }
    }

    return total;
}


console.log(romanToInt(str));