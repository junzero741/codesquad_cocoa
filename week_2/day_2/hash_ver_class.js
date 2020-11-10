class GoodyMap {

    constructor(size) {
        this.storage = [];
        if (size) {
            this.size = size;
        } else {
            this.size = 100;
        }
    }


    // 입력받은 key를 해시코드로 변환하기
    getHashCode(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;      // 정수 % 10 은 항상 한 자리 숫자.
    }


    // 키-값을 추가하기
    put(key, value) {
        let index = this.hash(key);

        if (this.storage[index] === undefined) {
            this.storage[index] === [[key, value]]; // 이중배열로 넣어줘야 충돌났을 때 [[key, value], [key, value]] 이렇게 여러 키-값을 넣을 수 있다.
        } else {
            let storageFlag = false;
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1] = value;
                    storageFlag = true;
                }
            }
            if (!storageFlag) {
                this.storage
            }
        }
    }


    // 해당 키에 있는 값을 삭제한다.
    remove(key) {
        let index = this.getHashCode(key);

        if (this.storage[index] === undefined) {
            return false;
        }
        else if (this.storage[index].length === 1
            && this.storage[index][0][0] === key) {
            this.storage.splice(index, 1);
            return true;
        } else {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][0] === key) {
                    this.storage[index].splice(i, 1);   // 값만 없애는게 아니라 키도 같이 없애야 함.
                    return true;
                }
            }
            return false;
        }
    }



    // 해당 키와 매치되는 값을 찾아서 리턴하기
    get(key) {
        let index = this.getHashCode(key);
        if (this.storage[index] === undefined) {
            return false;
        } else if (this.storage[index].length === 1 
            && this.storage[index][0][0] === key) {
                return this.storage[index][0][1];
            } else {
                for (let i = 0; i < this.storage[index].length; i++) {
                    if (this.storage[index][i][0] === key) {
                        return this.storage[index][i][1];
                    }
                }
                return false;
            }
    }


    getTable() {
        return this.storage;
    }

/* ---------------------------------------------여기부터 다시-----------------------------------------------*/


    // 해당키가 존재하는지 판단, Boolean 결과를 리턴하기
    containsKey(key) {
        let index = this.getHashCode(key);
        return index in this.hashMap;
    }

    // 전체 맵을 초기화한다.
    clear() {
        for (let prop in this.hashMap) {
            delete this.hashMap[prop];
        }
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
        if (this.keys().length === 0) {
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
pizzaMenu.put("t", 10);

console.log(pizzaMenu.get("peperoni"));                 // 10   peperoni => 15000이 사라져버렸다!
console.log(pizzaMenu.get("t"));                        // 10  

pizzaMenu.containsKey("peperoni");          // true
pizzaMenu.remove("peperoni");
pizzaMenu.isEmpty();                        // true



// 같은 해시코드를 갖는 키-값(t to 6)을 put 하더라도 기존 해시코드(peperoni to 6)의 값이 없어지지 않아야 한다..
// 없어지지 않고 같은 키 인덱스(6)에 배열로 push되어야 할듯 
