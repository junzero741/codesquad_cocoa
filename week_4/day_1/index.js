const title = document.querySelector(".dropdown"),
    mainList = document.querySelector(".dropdown-content"),
    dropMain = document.querySelector(".dropdown-main");

let timeout;
const HIDE = "hiding"



dropMain.addEventListener("mouseenter", () => {
    timeout = setTimeout(renderList, 1000);
});

dropMain.addEventListener("mouseout", () => {
    clearTimeout(timeout);
    hideList();
});


function renderList () {
    mainList.classList.remove(HIDE);
    mainList.addEventListener("mousemove" )
}

function hideList() {
    mainList.classList.add(HIDE);
}























// title.appendChild(mainList);
// title.addEventListener("mouseover", renderList);
// title.addEventListener("mouuseout", hideList);


// var myVar;


// function hideList() {
//     mainList.classList.add("hiding");
//     clearTimeout(myVar);
// }


// function renderList() {
//     const SECOND = 1000;

//     myVar = setTimeout(function () {
//         mainList.classList.add("showing");
//     }, SECOND);

// }



