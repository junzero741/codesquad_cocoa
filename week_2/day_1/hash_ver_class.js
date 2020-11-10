// HashMap 객체 생성
// const GoodyMap = function () {
//     this.map = new Object();
// }


class GoodyMap {

    constructor(size) { //생성자는 class를 new 키워드로 호출할 때 자동실행, 자동으로 객체(INSTANCE) 반환
        this.buckets = new Array(size)
        this.size = size;
    }
    
    // 해시 함수
    hash(key) {
        return key.toString().length % this.size;
    }

    // 키-값을 추가한다.     
    put(key, value) {
        let index = this.hash(key);
        this.map[key] = value;
    }

    // 해당 키와 매치되는 값을 찾아서 리턴한다.
    get(key) {
        return this.map[key];
    }

    // 해당 키가 존재하는지 판단, Boolean 결과를 리턴한다.
    containsKey(key) {
        return key in this.map;
    }

    // 전체 맵을 초기화한다.
    clear() {
        for (let prop in this.map) {
            delete this.map[prop];
        }
    }

    // 해당 키에 있는 값을 삭제한다.
    remove(key) {
        delete this.map[key];
    }

    // keys() 전체 목록을 [String] 배열로 리턴한다.
    keys() {
        let arKey = new Array();
        for (let prop in this.map) {
            arKey.push(prop);
        }
        return arKey;
    }

    // 비어있는 맵인지 Boolean 결과를 리턴한다. *****
    isEmpty() {
        let arKey = new Array();
        for (let prop in this.map) {
            arKey.push(prop);
        }
        if (arKey.length === 0) {
            return true;
        } else {
            return false;
        }

    }

    // 전체 아이템 개수를 리턴한다.
    size() {
        let count = 0;
        for (let prop in this.map) {
            count++;
        }
        return count;
    }

    // 키-값으로 기존 값을 대체한다.
    replace(key, value) {
        this.map[key] = value;
    }
}



/* ----------------------------------------------------여기서부터 테스트--------------------------------------------*/

// json 테스트 데이터 생성
var oJsonValue = {
    "JsonField1": "JsonVal1",
    "JsonField2": "JsonVal2",
    "JsonField3": "JsonVal3",
};

// HashMap 생성
const Goody = new GoodyMap();


// Map 에 key, value 값으로 구성된 데이터를 추가
Goody.put("Key1", "Val1");
Goody.put("Key2", "Val2");
Goody.put("Key3", "Val3");
Goody.put("ArrayKey", ["Arr1", "Arr2", "Arr3"]); // Array
Goody.put("JsonKey", oJsonValue); //Json 형식


// Map 에서 지정한 Key에 해당하는 Value값을 반환
console.log(Goody.get("Key1"));      // Val1
console.log(Goody.get("ArrayKey"));      // ["Arr1", "Arr2", "Arr3"]
console.log(Goody.get("ArrayKey")[0]);      // Arr1
console.log(Goody.get("JsonKey"));       // Object {JsonField1: "JsonVal1", JsonFiled2: "JsonVal2", JsonFiled3: "JsonVal3"}
console.log(Goody.get("JsonKey").JsonField1);       // JsosnVal1


// Map 에서 지정한 Key에 해당하는 데이터 삭제
Goody.remove("Key1");
console.log(Goody.get("Key1")); // undefined


// Map에서 지정한 Key의 존재 여부를 반환
console.log(Goody.containsKey("Key2"));  // true
console.log(Goody.containsKey("Val2"));  // false  -> key 값이 아니므로


// Map에서 구성된 키정보를 배열로 반환
let arKey = Goody.keys();
console.log(arKey); // [ 'Key2', 'Key3', 'ArrayKey', 'JsonKey' ]


// Map 사이즈 체크
console.log(Goody.size());  // 4


// 키-값으로 기존 값을 대체한다.
Goody.replace("Key2", "Valuek");
console.log(Goody.get("Key2"));  // Valuek


// Map에 구성된 데이터 초기화
Goody.clear();
console.log(Goody.keys());       // []

// 비어있는 맵인지 Boolean 결과를 리턴한다.
console.log(Goody.isEmpty());   // true  (위에서 clear() 했으므로. )