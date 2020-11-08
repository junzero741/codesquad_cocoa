// 기본개념 {배열 숫자들의 합과 평균 계산}
const myArray = [1,2,3,4];
const sum = myArray.reduce((acc, currValue, currIndex, array) => {
    return acc + currValue;
}, 0);
const avg = sum / myArray.length;
// console.log(avg); 



// 예제 1 {배열의 합 계산하기}
const numbers = [2, 10, 11, 5, 16];
const sum2 = numbers.reduce((acc, currValue) => {
    return acc + currValue;
}, 0);
// console.log(sum2);



// 예제 2 {배열에서 오브젝트 빌드하기}  [HARD]
const songs = [
    { id: 1, name: "Curl of the Burl", artist: "Mastodon" },
    { id: 2, name: "Oblivion", artist: "Mastodon" },
    { id: 3, name: "Flying Whales", artist: "Gojira" },
    { id: 4, name: "L'Enfant Sauvage", artist: "Gojira" }
];
const obj = songs.reduce((acc, currValue) => {
    const artist = currValue.artist;
    const artistCount = acc[artist] ? acc[artist] + 1 : 1;

    return {
        ...acc,
        [artist]: artistCount,
    };
}, {});
// console.log(obj);


// 예제 3 {배열로 된 배열을 하나의 배열로 만들기}
const mult = [songs, [{id:112, name: "Chop Suey", artist: "System of a Down"}]];
const flatMult = mult.reduce((acc, currValue) => {
    return acc.concat(currValue);
}, []);
console.log(flatMult);