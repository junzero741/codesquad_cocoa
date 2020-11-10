class GoodyMap {
    constructor(index) {
        this.hashMap = Array.from({ length: index+1 }, () => []);
        this.index = index;
    }
// [ [key][value],    [key][value],     [key][value]  ]

    // 입력받은 key를 해시코드로 변환하기
    getHashCode(key) {
        let asciiArr = [];
        let asciiSum = 0;
        let hashCode = Array.from(key);
        for (let i = 0; i < hashCode.length; i++) {
            asciiArr[i] = hashCode[i].charCodeAt(0);
            asciiSum += asciiArr[i];
        }

        return asciiSum % 10;       // 정수 % 10 은 항상 한 자리 숫자.
    }

    // 키-값을 추가하기
    put(key, value) {
        let hashNum = this.getHashCode(key);

        return this.hashMap[hashNum] = value;
    }

    // 해당 키와 매치되는 값을 찾아서 리턴하기
    get(key) {
        let hashNum = this.getHashCode(key);
        return this.hashMap[hashNum];
    }

    // 해당키가 존재하는지 판단, Boolean 결과를 리턴하기
    containsKey(key) {
        let hashNum = this.getHashCode(key);
        return hashNum in this.hashMap;
    }

    // 전체 맵을 초기화한다.
    clear() {
        for (let prop in this.hashMap) {
            delete this.hashMap[prop];
        }
    }

    // 해당 키에 있는 값을 삭제한다.
    remove(key) {
        let hashNum = this.getHashCode(key);
        delete this.hashMap[hashNum]
    }


    // keys() 전체 목록을 [String] 배열로 리턴한다.
    keys() {
        let arKey = new Array();
        for (let prop in this.hashMap) {
            arKey.push(prop);
        }
        return arKey;
    }


    // 비어있는 맵인지 Boolean 결과를 리턴한다.
    isEmpty() {
        if(this.keys().length === 0) {
            return true;
        } else {
            return false;
        }
       
    }


    // 전체 아이템 개수를 리턴한다.
    size() {
        let count = 0;
        for (let prop in this.hashMap) {
            count++;
        }
        return count;
    }

    
    // 키-값으로 기존 값을 대체한다.
    replace(key, value) {
        let hashNum = this.getHashCode(key);
        return this.hashMap[hashNum] = value;
    }

}

// 인스턴스 생성
let pizzaMenu = new GoodyMap;

pizzaMenu.put("peperoni", 17000);           // 17000
pizzaMenu.put("peperoni", 15000);           // 15000

pizzaMenu.get("peperoni");                 // 15000
pizzaMenu.containsKey("peperoni");          // true
pizzaMenu.remove("peperoni");
pizzaMenu.isEmpty();                        // true
    
