const map = document.querySelector(".map");
     
window.onload = createTown();

function createTown() {
    const town = document.createElement("div");
    town.className = "town";
    map.appendChild(town);
    
    town.style.position = "absolute";
    town.style.top = "10px";
    town.style.left = "10px";
    town.style.width = "10px";
    town.style.height = "10px";
    town.style.border = "2px solid black";

} 



function createCount(target) {
    const el = document.createElement('div');   // div 태그 생성
    el.className = target.innerText;            // 태그의 클래스 이름을 마우스가 위치한 과일의 내부 텍스트와 같게하기
    el.innerText = `${el.className} : 1`;       // 태그의 내부 텍스트를  `클래스 이름 : 1` 로
    fruitCount.appendChild(el);                 // fruitCount 에 자식 노드로 붙이기
}


