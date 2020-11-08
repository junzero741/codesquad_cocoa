# 함수형 프로그래밍이란?

* 함수의 출력 값이 오직 함수로 넘어온 argument에만 의존하는 프로그래밍.

# 왜 Map, Filter, Reduce를 써야 할까?

## 1. Map

<br>

* 배열 내부 프로퍼티를 각각 수정하거나 추가하기 편해서 사용한다. <br>
* 모든 배열의 값에 Function을 실행하는 Method.

<br/><br/>

## Map 사용방법

다음은 가장 기본적인 호출 방법이다.

``` 
const myArray = [1,2,3,4];

consy myArrayTimesTwo = myArray.map((value, index, array) => {
    return value * 2;
});

console.log(myArray);   // [1,2,3,4];
console.log(myArrayTimesTwo);   // [2,4,6,8];
```

> 모든 수를 2로 곱한다.

<br/>
위에서 볼 수 있듯, map은 인자로 콜백을 받는다. map이 호출될 때, 이 콜백에 현재값의 iteration, iteration의 index 그리고 원본 배열이 주어진다. map을 위한 optional한 두번째 인자도 있다. 두번째 인자는 콜백 내부에서 this를 이용하기 위한 값이다.
<br/><br/>

## 예제

자바스크립트 오브젝트의 배열을 가정해보자.

``` 
const songs = [
    { id: 1, name: "Curl of the Burl", artist: "Mastodon" },
    { id: 2, name: "Oblivion", artist: "Mastodon" },
    { id: 3, name: "Flying Whales", artist: "Gojira" },
    { id: 4, name: "L'Enfant Sauvage", artist: "Gojira" }
];
```

> songs 배열이 있다.

* 오브젝트의 배열을 간단하게 스트링의 배열로 바꾸기

``` 
const allSongNames = songs.map(song => {
    return song.name;
});

console.log(allSongNames); // ["Curl of the Burl", "Oblivion", "Flying Whales", "L'Enfant Sauvage"]
```

> map을 이용하여 모든 song의 이름을 가져온다.

* 유틸 함수를 이용하여 변화 적용하기

``` 
const lowerCaseSongs = songs.map(mySongFunc);

const mySongFunc = song => {
    return song.name.toLowerCase();
};

console.log(lowerCaseSongs); // "curl of the burl", "oblivion", "flying whales", "l'enfant sauvage"
```

> 맵과 함께 유틸 함수를 이용하여 모든 song의 name을 소문자로 바꾸어준다.

* 주어진 배열을 변화시키고, 각각의 오브젝트의 프로퍼티를 추가/삭제 하기

``` 
const mapped = songs.map(song => {
    const {artist, ...rest} = song;

    return {
        ...rest,
        scrobbleCount : 0,
        spotifyUrl: "let's just imagine these properties make sense for now",
    };
});

console.log(mapped);

// const songs = [
//    {
//        id: 1,
//        name: "Curl of the Burl",
//        scrobbleCount : 0,
//        spotifyUrl: "let's just imagine these properties make sense for now"
//    },
//    etc....
// ];
```

> artist 프로퍼티를 제거하고 다른 프로퍼티를 추가했다.<br>

## 2. Filter

프로그래머라면 존재하는 배열에서 특정한 아이템을 필터해야 하는 경우가 있었을 것이다. 아마 직접 하려면 꽤나 귀찮았겠지만, 'filter'를 사용하면 간단하게 해결할 수 있다. <br></br>

``` 
const myArray = [1,2,3,4];

const myEvenArray = myArray.filter((value, index, array) => {
    return value % 2 === 0;
});

console.log(myArray); // [1,2,3,4];
console.log(myEvenArray); // [2, 4];
```

> 배열에서 짝수만 골라냈다. <br>

**Filter** 는 map과 같은 인자를 받으며, 매우 비슷하게 동작한다. 유일하게 다른 점은 콜백이 **true** 혹은 **false**로 반환되어야 한다는 것이다. 만일 **true**를 반환한다면 배열이 그 원소를 계속 갖고 있고, 만일 **false**를 반환한다면 필터링된다.

1. 필터링 예제 : 짝수 필터링하기

``` 
const numbers = [1,2,3,4,5,6,7,8,9,10];

const evenNumbers = numbers.filter(num => {
    return num % 2 === 0;
});

console.log(evenNumbers); // [2,4,6,8,10];
```

> 필터를 이용하여 짝수를 필터링 했다.<br>

<br></br>

2. 필터링 예제 : 간단한 문자열 검색하기

``` 
const strings = ["hello", "Matt", "Mastodon", "Cat", "Dog"];

const filtered = strings.filter(str => {
    return str.includes("at");
});

console.log(filtered); // ["Matt", "Cat"];
```

> 'at'라는 문자열을 가진 단어를 필터링<br>

<br></br>

3. 필터링 예제 : 오브젝트의 배열 필터링하기

``` 
const mastodonSongs = songs.filter(song => {
    return song.artist === "Mastodon"
});

console.log(mastodonSongs);

// [
//    { id: 1, name: "Curl of the Burl", artist: "Mastodon"},
//    { id: 2, name: "Oblivion", artist: "Mastodon"}
// ]
```
> 모든 'mastodon' 노래를 필터링<br>


## 3. Reduce
**reduce**는 배열 하나를 받아서 하나의 값으로 바꿔준다. 예를 들어, 숫자의 배열을 가지고 있을 때, 쉽게 모든 값의 평균을 구할 수 있다.

## 언제 써야할까?

1. map은 배열의 원소들의 값을 바꿀 때
2. filter는 조건에 맞는 값만 보고 싶을 때
3. reduce는 배열 하나를 받아서, 그 원소들을 이용한 하나의 값을 보고 싶을 때
