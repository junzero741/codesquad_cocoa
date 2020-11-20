const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]


function aVeryBigSum(ar) {

    const answer = ar.reduce(function(accumulator, currentValue, currentIndex, array) {
        return accumulator + currentValue;
      });


      return answer;

}

function main() {
    console.log(aVeryBigSum(ar));
}