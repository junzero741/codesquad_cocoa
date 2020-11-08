# var, let, const의 차이점

## 들어가며
ES6 이전에는 변수를 선언할 수 있는 키워드가 `var` 뿐이었다. 하지만 ES6에서는 `let`, `const` 키워드가 추가되어 이를 이용해서 변수를 선언할 수 있게 되었다.
</br></br>
## 1. 변수 선언 방식
우선, `var`는 변수 선언 방식에 있어 큰 단점을 가지고 있다.
```
var name = 'bathingape'
console.log(name) // bathingape

var name = 'javascript'
console.log(name) // javascript
```
> 똑같은 이름의 변수를 한 번 더 선언했는데도 에러가 나지 않고 각기 다른 값이 출력되는 것을 볼 수 있다. 이는 유연한 변수 선언으로 간단한 테스트에는 편리할 수 있겠으나, 코드량이 많아진다면 어디에서 어떻게 사용 될지 파악이 힘들 뿐더러, 값이 바뀔 우려가 있다. ~~에러가 꼭 나쁜 것만은 아닌듯~~ <br>

</br></br>
그래서 ES6 이후 이를 보완하기 위해 `let` 과 `const`가 추가되었다.

```
let name = 'bathingape'
console.log(name) // bathingape

let name = 'javascript'
console.log(name)
// Uncaught SyntaxError: Identifier 'name' has already been declared
```
> `name`이 이미 선언되었다는 에러가 나온다. (`const`도 마찬가지) <br>

</br></br>
그렇다면 `let`과 `const`의 차이점은 무엇일까?
이 둘의 차이점은 `immutable` 여부이다.
```
let name = 'bathingape'
console.log(name) //bathingape

let name = 'javascript'
console.log(name)
// Uncaught SyntaxError: Identifier 'name' has already been declared

name = 'react'
console.log(name) //react
```
> 'let'은 변수에 새로운 값을 할당할 수 있다. <br>
```
const name = 'bathingape'
console.log(name) // bathingape

const name = 'javascript'
console.log(name)
// Uncaught SyntaxError: Identifier 'name' has already been declared

name = 'react'
console.log(name)
// Uncaught TypeError: Assignment to constant variable.
```
> 'const'는 변수에 새로운 값을 할당할 수 없다.

</br></br>

## 2. 호이스팅
호이스팅(Hoisting)이란, var 선언문이나 function 선언문 등을 해당 스코프의 선두로 옮긴 것처럼 동작하는 특성을 말한다. <br>
<br>
자바스크립트는 ES6에서 도입된 'let', 'const'를 포함하여 모든 선언(var, let, const, function, function*, class)을 호이스팅한다.
<br><br>
하지만, var로 선언된 변수와는 달리 'let'으로 선언된 변수를 선언문 이전에 참조하면 참조 에러(ReferenceError)가 발생한다.
```
console.log(foo); // undefined
var foo;

console.log(bar); // Error: Uncaught ReferenceError: bar is not defined
let bar;
```
> var 로 선언한 foo는 존재하지만, let 로 선언한 bar는 존재하지 않는 모습. </br>

이는 'let'로 선언된 변수는 스코프의 시작에서 변수의 선언까지 일시적 사각지대(Temporal Dead Zone; TDZ)에 빠지기 때문이다. </br>

참고로 변수는 '선언 단계' > '초기화 단계' > '할당 단계' 에 걸쳐 생성되는데, 'var'로 선언된 변수는 선언과 초기화가 한번에 이루어진다.
```
console.log(foo); // undefined

var foo;
console.log(foo); // undefined

foo = 1;          // 할당문에서 할당 단계 실행
console.log(foo); // 1
```
> 스코프의 선두에서(호이스팅) 선언 단계와 초기화 단계가 실행되기 때문에, 변수 선언문 이전에 변수를 참조할 수 있다. </br>

<br> 반면, 'let'로 선언된 변수는 선언 단계와 초기화 단계가 분리되어 진행된다.
```
console.log(foo); // ReferenceError : foo is not defined

let foo; // 변수 선언문에서 초기화 단계가 실행된다.
console.log(foo); // undefined

foo = 1; // 할당문에서 할당 단계 실행
console.log(foo); // 1
```
> 스코프의 선두에서 선언 단계만 실행된다. 아직 변수가 초기화(메모리 공간 확보와 undefined로 초기화) 되지 않았다. 따라서 변수 선언문 이전에 변수를 참조할 수 없다. </br>

<br></br>
## 3. 정리

그렇다면 어떤 변수 선언 방식을 써야할까?
* 변수 선언에는 기본적으로 'const' 를 사용한다.
* 재할당이 필요한 경우에 한정, 'let' 을 사용한다.
* 객체를 재할당하는 경우는 흔치 않으므로, 객체 선언에는 const를 적극 사용하자.
1. 재할당이 필요한 경우에 한정해 'let'을 사용하고, 변수의 스코프는 최대한 좁게 만든다. <br></br>
2. 재할당이 필요 없는 상수와 객체에는 'const'를 사용한다.
<br></br>
## 4. 참조문서
1. https://gist.github.com/LeoHeo/7c2a2a6dbcf80becaaa1e61e90091e5d
2. https://poiemaweb.com/es6-block-scope
3. https://velog.io/@bathingape/JavaScript-var-let-const-%EC%B0%A8%EC%9D%B4%EC%A0%90
