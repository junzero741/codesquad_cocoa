const listTitle = document.querySelector(".listTitle"),
    mainList = document.querySelector(".list");
   


function handleEvent () {

}


listTitle.appendChild(mainList);
listTitle.addEventListener("mouseover", renderList);


// function consoleTest() {
//     const SECOND = 1000;
//     setTimeout(function () {
//         console.log("wow");
//     }, SECOND);
// }


function renderList() {
    const SECOND = 1000;
    setTimeout(function () {
        mainList.classList.remove("hiding");
        console.log("마우스가 주황색 위에서 노는중");
    }, SECOND);
   

   
    
 
}


// function hideList() {
//     mainList.classList.add("hiding");
// }

