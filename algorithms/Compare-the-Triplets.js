// 앨리스의 평가 점수가 담긴 배열 a = [?, ?, ?]
// 밥의 평가 점수가 담긴 배열 b = [?, ?, ?]

// a와 b의 같은 인덱스의 원소끼리 비교해서 
// a가 크면 aliceCnt++ ,  b가 크면 bobCnt++
// scores = [aliceCnt, bobCnt] 리턴.

const a = [17, 28, 30];
const b = [99, 16, 8];


function compareTriplets(a, b){
    let aliceCnt = 0;
    let bobCnt = 0;
    const scores = [];
    
    for(let i = 0; i < a.length; i++) {
        if(a[i] > b[i]) {
            aliceCnt++;
        } else if (a[i] < b[i]) {
            bobCnt++;
        } 
    }

    scores.push(aliceCnt, bobCnt);
    console.log(scores);
}


function main() {
    compareTriplets(a, b);

}

main();