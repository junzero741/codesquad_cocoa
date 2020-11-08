// 기본적인 호출 방법
const myArray = [1, 2, 3, 4];

const myArrayTimesTwo = myArray.map((value, index, array) => {
    return value * 2;
});

// console.log(myArray);
// console.log(myArrayTimesTwo);


// 예제 1 songs 배열 선언
const songs = [
    { id: 1, name: "Curl of the Burl", artist: "Mastodon" },
    { id: 2, name: "Oblivion", artist: "Mastodon" },
    { id: 3, name: "Flying Whales", artist: "Gojira" },
    { id: 4, name: "L'Enfant Sauvage", artist: "Gojira" }
];



//예제 2 map을 이용하여 모든 song의 이름 가져오기
let songName = song => {
    return song.name;
};
const allSongNames = songs.map(songName);
// console.log(allSongNames);



//예제 3 모든 song의 name을 소문자로 바꾸기
const mySongFunc = song => {
    return song.name.toLowerCase();
};
const lowerCaseSongs = songs.map(mySongFunc);
// console.log(lowerCaseSongs);



//예제 4 주어진 배열을 변화시키고, 각각의 오브젝트의 프로퍼티를 추가/삭제하기
const mapped = songs.map(song => {
    const { artist, ...rest } = song;

    return {
        ...rest,
        scrobbleCount: 0,
        spotifyUrl: "let's just imagine these properties make sense for now",
    };
});
// console.log(mapped);




//예제 5 간단하게 제곱근을 구해보자
const numbers1 = [4, 9, 16, 25, 36];
const result = numbers1.map(Math.sqrt);
// console.log(result);




//예제 6 기존 배열의 값의 X2를 한 배열을 생성해 보자.
const numbers2 = [1,2,3,4,5,6,7,8,9];
const newNumbers = numbers2.map(number => number * 2);
// console.log(newNumbers);




//예제 6 기존 배열의 값의 제곱을 한 배열을 생성해 보자.
const squareNumbers = numbers2.map(number => number * number);
// console.log(squareNumbers);




//예제 7 object 타입에서 이름만 추출해보자.
const students = [
    {id: 1, name: "james"},
    {id: 2, name: "tim"},
    {id: 3, name: "john"},
    {id: 4, name: "brian"},
];
const names = students.map(student => student.name);
// console.log(names);



//예제 8 이번엔 id만 추출해보자.
const ids = students.map(student => student.id);
// console.log(ids);




//예제 9 다른 객체 예시
const testJson = [
    {name: "이건", salary: 50000000},
    {name: "홍길동", salary: 100000},
    {name: "임신구", salary: 3000000},
    {name: "이승룡", salary: 2000000},
];

const newJson = testJson.map(function(element, index) {
    // console.log(element);
    var returnObj = {}
    returnObj[element.name] = element.salary;
    return returnObj;
});
// console.log("newObj");
// console.log(newJson);



//예제 10 배열 값에 곱하기 2한 값들을 reverse 해보자.
const numbers = [1,2,3,4,5,6];
const numbersReverse = numbers.map(number => number*2).reverse();
// console.log(numbersReverse);



//예제 11 array 안의 array
const numbers3 = [[1,2,3],[4,5,6],[7,8,9]];
const newNumbers3 = numbers3.map(array => array.map(number => number*2).reverse());
console.log(newNumbers3);