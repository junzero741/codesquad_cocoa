# 해시 테이블

## 해시 테이블이란?
해시 테이블(hash table)은 쌍으로 이뤄진 값들의 리스트이다. 
```
 menu = { "french fries" => 0.75, "hamburger" = 2.5, "hot dog" = 1.5, "soda" = 0.6} 
 ```

* 첫 번째 항목 (여기선 "french fries") 을 키라 부른다.
* 두 번째 항목 (여기선 0.75) 가 값이다.

프렌치 프라이가 75센트임을 가리키기 위해 한 쌍으로 연결된다.
<br></br>

## 해시 함수로 해싱하기
```
A = 1
B = 2
C = 3
D = 4 
E = 5
...
```
위 코드에 따르면,<br></br>
ACE 는 135로,<br></br>
CAB 는 312로, <br></br>
DAB 는 412로, <br></br>
BAD 는 214로 변환된다. <br></br>

문자를 가져와 숫자로 변환하는 이러한 과정을 **해싱** 이라고 부른다. 또한, 글자를 특정 숫자로 변환하는 데 사용한 코드를 **해시 함수** 라 부른다. <br></br>

## 해시 함수
각 문자에 해당하는 숫자를 가져와 모든 수를 **합쳐서** 반환한다고 해보자. 이렇게 하면 BAD는 다음과 같은 두 단계의 과정을 거쳐 숫자 **7**이 된다.
1. 먼저 BAD를 214로 변환한다.
2. 각 숫자를 가져와 합한다.
> 2 + 1 + 4 = 7 </br>

이번에는 문자에 해당하는 모든 수를 곱해서 반환해보자. 단어 BAD는 숫자 **8**로 변환된다. <br></br>
1. 먼저 BAD를 숫자 214로 변환한다.
2. 각 숫자를 가져와 곱한다.
> 2 * 1 * 4 = 8 </br>


<br></br>
## 해시 함수의 조건 "동일 입력, 동일 출력"
실제 쓰이는 해시 함수는 위보다 더 복잡하지만, 이러한 "곱셈" 해시 함수를 사용하면 예제가 명확하고 간단해진다.
<br></br>
해시 함수가 유효하려면 딱 한 가지 기준을 충족해야 하는데, 해시 함수는 동일한 문자열을 해시 함수에 적용할 때마다 항상 **동일한 숫자**로 변환해야 한다. 주어진 문자에 대해 반환하는 결과가 일관되지 않으면 그 해시 함수는 유효하지 않다.
<br></br>

## 유의어 사전 만들기
