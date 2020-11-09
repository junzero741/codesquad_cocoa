// HashMap 객체 생성
const GoodyMap = function() {
    this.map = new Object();
}


GoodyMap.prototype = {

    //키-값을 추가한다.     
    put: function (key, value) {
        this.map[key] = value;
    },

    //해당 키와 매치되는 값을 찾아서 리턴한다.
    get: function (key) {
        return this.map[key];
    },

    //해당 키가 존재하는지 판단, Boolean 결과를 리턴한다.
    containsKey: function (key) {
        return key in this.map;
    },

    //전체 맵을 초기화한다.
    clear: function() {
        for (let prop in this.map) {
            delete this.map[prop];
        }
    },

    //해당 키에 있는 값을 삭제한다.
    remove: function (key) {
        delete this.map[key];
    },

    //keys() 전체 목록을 [String] 배열로 리턴한다.
    keys: function () {
        let arKey = new Array();
        for (let prop in this.map) {
            arKey.push(prop);
        }
        return arKey;
    },

    // 비어있는 맵인지 Boolean 결과를 리턴한다. *****
    isEmpty: function () {
        let arKey = new Array();
        for (let prop in this.map) {
            arKey.push(prop);
        }
        if(arKey.length === 0) {
            return true;
        } else {
            return false;
        }

    },

    // 전체 아이템 개수를 리턴한다.
    size: function () {
        let count = 0;
        for(let prop in this.map) {
            count++;
        }
        return count;
    },

    // 키-값으로 기존 값을 대체한다.
    replace: function (key, value) {
        this.map[key] = value;
    }
}


/* ----------------------------------------------------여기서부터 테스트--------------------------------------------*/

// json 테스트 데이터 생성
var oJsonValue = {
    "JsonField1" : "JsonVal1",
    "JsonField2" : "JsonVal2",
    "JsonField3" : "JsonVal3",
};

// HashMap 생성
var oMap = new GoodyMap();


// Map 에 key, value 값으로 구성된 데이터를 추가
oMap.put("Key1", "Val1");
oMap.put("Key2", "Val2");
oMap.put("Key3", "Val3");
oMap.put("ArrayKey", ["Arr1", "Arr2", "Arr3"]); // Array
oMap.put("JsonKey", oJsonValue); //Json 형식


// Map 에서 지정한 Key에 해당하는 Value값을 반환
console.log(oMap.get("Key1"));      // Val1
console.log(oMap.get("ArrayKey"));      // ["Arr1", "Arr2", "Arr3"]
console.log(oMap.get("ArrayKey")[0]);      // Arr1
console.log(oMap.get("JsonKey"));       // Object {JsonField1: "JsonVal1", JsonFiled2: "JsonVal2", JsonFiled3: "JsonVal3"}
console.log(oMap.get("JsonKey").JsonField1);       // JsosnVal1


// Map 에서 지정한 Key에 해당하는 데이터 삭제
oMap.remove("Key1");
console.log(oMap.get("Key1")); // undefined


// Map에서 지정한 Key의 존재 여부를 반환
console.log(oMap.containsKey("Key2"));  // true
console.log(oMap.containsKey("Val2"));  // false  -> key 값이 아니므로


// Map에서 구성된 키정보를 배열로 반환
let arKey = oMap.keys();
console.log(arKey); // [ 'Key2', 'Key3', 'ArrayKey', 'JsonKey' ]


// Map 사이즈 체크
console.log(oMap.size());  // 4


// 키-값으로 기존 값을 대체한다.
oMap.replace("Key2", "Valuek");
console.log(oMap.get("Key2"));  // Valuek


// Map에 구성된 데이터 초기화
oMap.clear();
console.log(oMap.keys());       // []

 // 비어있는 맵인지 Boolean 결과를 리턴한다.
 console.log(oMap.isEmpty());   // true  (위에서 clear() 했으므로. )