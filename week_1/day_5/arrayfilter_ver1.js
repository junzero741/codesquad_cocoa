const peoples = [
    "crong!@#",
    "honux5",
    "sarah#",
    "hea3d",
    "zello",
    "5lucas"];

const symbols = /[~!@#$%^&*()_+|<>?:{}]/;
const numbers = /[0-9]/g;


function filterId(list) {

    let idx = 0;
    let user = [];
    let userBin = [];


    //특수문자 필터링
    while (idx < list.length) {
        let currentId = list[idx];
        if (symbols.test(currentId)) {
            userBin.push(currentId);
        } else {
            user.push(currentId);
        }
        idx++;
    }

    //숫자 필터링
    const answerArr = [];

    for (let value of user) {
        for (let i = 0; i < value.length; i++) {
            if (numbers.test(value[i])) {
                value = value.replace(/[0-9]/g, "");
                answerArr.push(value);
            }
        }
        if (!answerArr.includes(value)) {
            answerArr.push(value);
        }
    }

    return answerArr;

}

filterId(peoples);

//기대 결과 값: 
// filterId(peoples)
//> ["honux", "head", "zello", "lucas"]
