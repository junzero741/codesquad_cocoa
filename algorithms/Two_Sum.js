
const NUMS = [2, 7, 11, 15];
const TARGET = 9;


var twoSum = function (nums, target) {
    const answerArr = [];

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                answerArr.push(i);
                answerArr.push(j);
            }
        }
    }


    return answerArr;
}


twoSum(NUMS, TARGET);