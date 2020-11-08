
const spotifySongs = [
    { id: 1, name: "Curl of the Burl", artist: "Mastodon", duration: 204 },
    { id: 2, name: "Oblivion", artist: "Mastodon", duration: 306 },
    { id: 3, name: "Flying Whales", artist: "Gojira", duration: 444 },
    { id: 4, name: "L'Enfant Sauvage", artist: "Gojira", duration: 246 },
];

const lastFmSongs = [
    { id: 5, name: "System of a Down", artist: "Chop Suey", duration: 192 },
    { id: 6, name: "Throne", artist: "Bring me the Horizon", duration: 186 },
    { id: 7, name: "Destrier", artist: "Agent Fresco", duration: 132 },
    { id: 8, name: "Out of the Black", artist: "Royal Blood", duration: 240 },
];

const allSongs = [spotifySongs, lastFmSongs];

// 3분이 넘는 모든 노래의 제목을 컴마로 나눈 배열을 가져야 한다면?

const songNames = allSongs

    .reduce((acc, currValue) => {
        return acc.concat(currValue);
    }, [])

    .map(song => {
        return {...song, duration: Math.floor(song.duration / 60)};
    })

    .filter(song => {
        return song.duration > 3;
    })

    .map(song => song.name)

    .join(" , ");

    console.log(songNames);