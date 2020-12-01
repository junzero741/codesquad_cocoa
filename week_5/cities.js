// 도시 생성자 함수
function City(name, owner, building, fee, idx) {
    this.name = name;
    this.owner = owner;
    this.building = building;
    this.fee = fee;
    this.idx = idx;
}


// 특별지역 생성자 함수
function SpecialLand(name, fee, effect, idx) {
    this.name = name;
    this.fee = fee;
    this.effect = effect;
    this.idx = idx;
}



// 도시 목록
let start = new SpecialLand("start", 0, "getSalary", 0);                                    // [0]
let taipei = new City("taipei", "none", "none", 0, 1);                                     // [1]                            
let hongkong = new City("hongkong", "none", "none", 0, 3);                                 // [2]
let maynila = new City("maynila", "none", "none", 0, 4);                                   // [3]
let singapore = new City("singapore", "none", "none", 0, 6);                               // [4]                         
let istanbul = new City("istanbul", "none", "none", 0, 9);                                 // [5]
let uninhabitedIsland = new SpecialLand("uninhabitedIsland", 0, "delay3turn", 10);         // [6]
let copenhagen = new City("copenhagen", "none", "none", 0, 13);                            // [7]
let zurich = new City("zurich", "none", "none", 0, 16);                                    // [8]    
let berilin = new City("berlin", "none", "none", 0, 18);                                   // [9]
let getSocialWelfareFund = new SpecialLand("getSocialWelfareFund", 0, "getAllFund", 20);   // [10] 
let sydney = new City("sydney", "none", "none", 0, 24);                                    // [11]
let lisbon = new City("lisbon", "none", "none", 0, 27);                                    // [12]
let madrid = new City("madrid", "none", "none", 0, 29);                                    // [13]
let spaceStation = new SpecialLand("spaceStation", 0, "goAnywhere", 0, 30);                // [14]
let paris = new City("paris", "none", "none", 0, 33);                                      // [15]
let roma = new City("roma", "none", "none", 0, 34);                                        // [16]  
let london = new City("london", "none", "none", 0, 36);                                    // [17]
let newyork = new City("newyork", "none", "none", 0, 37);                                  // [18]
let paySocialWelfareFund = new SpecialLand("paySocialWelfareFund", 0, "payFund", 38);      // [19]



// 특별지역들에게 각자 다른 메소드 삽입     (blumarble.js 파일로 보낼 것)
start.getsalary = function (player) {
    player.money += 200000;
}


uninhabitedIsland.freeze = function (player) {
    console.log(player + "가 무인도에 갇혔습니다.");
}



// 보드판 안에 도시들 삽입
const board = [start, taipei, hongkong, maynila, singapore, istanbul, uninhabitedIsland,
    copenhagen, zurich, berilin, getSocialWelfareFund,
    sydney, lisbon, madrid, spaceStation,
    paris, roma, london, newyork, paySocialWelfareFund];




