
// 기본개념 {배열에서 짝수만 골라내기}
const myArray = [1,2,3,4];
const myEvenArray = myArray.filter((value, index, array) => {
    return value % 2 === 0;
});
// console.log(myArray);
// console.log(myEvenArray);


// 예제 1 {필터를 이용하여 짝수 필터링하기}
const numbers = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers = numbers.filter(num => {
    return num % 2 === 0;
});
// console.log(evenNumbers);



// 예제 2 {간단한 문자열 검색하기}
const strings = ["hello", "Matt", "Mastodon", "Cat", "Dong"];
const filtered = strings.filter(str => {
    return str.includes("at");
});
// console.log(filtered);



//예제 3 {오브젝트의 배열 필터링하기}
const songs = [
    { id: 1, name: "Curl of the Burl", artist: "Mastodon" },
    { id: 2, name: "Oblivion", artist: "Mastodon" },
    { id: 3, name: "Flying Whales", artist: "Gojira" },
    { id: 4, name: "L'Enfant Sauvage", artist: "Gojira" }
];
const mastodongSongs = songs.filter(song => {
    return song.artist === "Mastodon";
});
console.log(mastodongSongs);