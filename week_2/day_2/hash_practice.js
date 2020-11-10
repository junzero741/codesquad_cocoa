class hashTable {

    constructor(size) {
        this.storage = [];
        if (size) {
            this.size = size;
        } else {
            this.size = 100;
        }
    }


    hash = (key) => {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }



    insert = (key, value) => {
        let index = this.hash(key);

        if (this.storage[index] === undefined) {
            this.storage[index] = [[key, value]];
        } else {
            let storageFlag = false;
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1] === value;
                    storageFlag = true;
                }
            }
            if (!storageFlag) {
                this.storage[index].push([key, value]);
            }
        }
    }


    delete = (key) => {
        let index = this.hash(key);

        if (this.storage[index] === undefined) {
            return false;
        }
        else if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
            this.storage.splice(index, 1);
            return true;
        } else {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index].splice(i, 1);
                    return true;
                }
            }
            return false;
        }
    }


    search = (key) => {
        let index = this.hash(key);
        if (this.storage[index] === undefined) {
            return false;
        } else if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
            return this.storage[index][0][1];
        } else {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1];
                }
            }
            return false;
        }
    }


    getTable() {
        return this.storage;
    }

}

let data = new hashTable(10);       // 괄호 안에 넣는 값만큼 사이즈 생김

data.insert(1, 5);
data.insert('a', 10);
data.insert('asd', 12);
data.insert(213, 14);
data.insert('a', 'b');
data.insert('213', '12');

console.log(data.search('213'));
console.log(data.search(1));

data.delete('213');
data.delete(1);
console.log(data.search('213'));
console.log(data.getTable());