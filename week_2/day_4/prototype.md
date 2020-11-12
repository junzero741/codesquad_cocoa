# 프로토타입 정리
```
function Person() {
    this.eyes = 2;
    this.nose = 1;
}

let kim = new Person();
let park = new Person();


console.log(kim.eyes);  // > 2
console.log(kim.nose);  // > 1

console.log(park.eyes); // > 2
console.log(park.nose); // > 1
```

* kim과 park은 eyes와 nose를 공통적으로 가지고 있다.
* 메모리에는 eyes와 nose가 두 개씩 총 4개 할당된다.
* 객체를 100개 만들면 200개의 변수가 저장되므로 낭비다.
* 이런 문제를 프로토타입으로 해결할 수 있다!


```
function Person() {

    Person.prototype.eyes = 2;
    Person.prototype.nose = 1;

    let kim = new Person();
    let park = new Person();

    console.log(kim.eyes); // > 2
    ...
}
```


* `Person.protoype` 이라는 빈 Object가 어딘가에 존재한다. 
* `Person` 함수로부터 생성된 객체(`kim`, `park`) 들은 어딘가에 존재하는 Object에 들어있는 값을 모두 갖다쓸 수 있다.
*  **즉 `eyes`와 `nose`를 어딘가에 있는 빈 공간에 넣어놓고 `kim`과 `park`이 공유해서 사용하는 것**


## Prototype Link 와 Prototype Object

<br></br>
### Prototype Object
객체는 언제나 함수(Function)로 생성된다.
```
function Person() {} // > 함수

let personObject = new Person(); // > 함수로 객체를 생성
```
> `personObject` 객체는 `Person` 이라는 함수로 생성된 객체이다. 이렇듯 언제나 객체는 함수에서 시작된다. </br>

<br></br>
```
let obj = {};
```
얼핏보면 함수랑 전혀 상관없는 코드로 보이지만 위 코드는 사실 다음 코드와 같다.
```
let obj = new Object();
```
위 코드에서 `Object`가 자바스크립트에서 기본적으로 제공하는 함수이다.