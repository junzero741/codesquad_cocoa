
const time = "11:59:59PM";
const time2 = "12:05:05AM";


function timeConversion(s) {
    let newTime = "";
    let newStr;
    const hourNum = Number(s[1]);
    const hourTwo = s.slice(0, 2);
    const numHourTwo = Number(hourTwo);

    if (s.indexOf("P") !== -1) {
        if (numHourTwo > 10) {
            const hour = numHourTwo;
            const strHour = JSON.stringify(hour);
            newStr = s.substring(2);
            const newStr1 = newStr.substring(0, 6);
            const newStr2 = strHour.concat(newStr1);
            newTime = newStr2;
        } else {
            const hour = hourNum + 12;
            const strHour = JSON.stringify(hour);
            newStr = s.substring(2);
            const newStr1 = newStr.substring(0, 6);
            const newStr2 = strHour.concat(newStr1);
            newTime = newStr2;
        }

        console.log(newTime);

    } else if (s.indexOf("A" !== -1 && s.slice(0, 2) === "12")) {
        const newStr3 = s.replace("1", "0");
        const newStr4 = newStr3.replace("2", "0");
        const newStr5 = newStr4.substring(0, 8);
        newTime = newStr5;
        console.log(newTime);
    }



}

function main() {
    timeConversion(time);
}

main();