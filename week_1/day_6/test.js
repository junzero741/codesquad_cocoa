// 기본적인 호출 방법
const myArray = [1,2,3,4];

const myArrayTimesTwo = myArray.map((value, index, array) => {
    return value * 2;
});

// console.log(myArray);
// console.log(myArrayTimesTwo);


// 예제 1
const songs = [
    { id: 1, name: "Curl of the Burl", artist: "Mastodon"},
    { id: 2, name: "Oblivion", artist: "Mastodon"},
    { id: 3, name: "Flying Whales", artist: "Gojira"},
    { id: 4, name: "L'Enfant Sauvage", artist: "Gojira"}
];


// 예제 2
const allSongNames = songs.map(song => {
    return song.name;
});
// console.log(allSongNames);


// 예제 3
const lowerCaseSongs = songs.map(mySongFunc);

const mySongFunc = song => {
    return song.name.toLowerCase();
};

console.log(lowerCaseSongs);


//예제 4
const mapped = songs.map(song => {
    // let's remove the artist property
    const { artist, ...rest } = song;

    return {
        ...rest,
        scrobbleCount: 0,
        spotifyUrl: "let's just imagine these properties make sense for now",
    };
});

console.log(mapped);
