const title = document.querySelector(".dropdown"),
    mainList = document.querySelector(".dropdown-content");

    const HIDE = "hiding"
   

function handleEvent() {
    let timeout; 

    title.addEventListener("mouseenter", () => {
        timeout = setTimeout(renderList, 1000);
    });
    title.addEventListener("mouseleave", () => {
        clearTimeout(timeout);
        hideList();
    });
    
    mainList.addEventListener("mouseenter", renderList);
    mainList.addEventListener("mouseleave", hideList);
}


function renderList () {
    
    mainList.classList.remove(HIDE);
}
function hideList() {
    mainList.classList.add(HIDE);
}


function init () {
    handleEvent();
}


init();














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



