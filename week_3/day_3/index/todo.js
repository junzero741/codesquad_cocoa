const toDoForm = document.querySelector(".js-todoform"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-todolist");




// 체크박스 체크하면 해당 텍스트에 줄이 그어지도록
function listThrough(event) {

    const checkBox = event.target;
    const li = checkBox.parentNode;
    const CHECKED_CLASS = "checked"
    if (checkBox.checked) {
        li.classList.add("checked");
    } else {
        li.classList.remove("checked");
    }

}


// 휴지통 누르면 해당 리스트가 지워지도록
function removeList(event) {

    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

}



function addList() {

    const list = document.createElement("li");
    const span = document.createElement("span");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    const btn = document.createElement("button");

    checkBox.addEventListener("change", listThrough)
    btn.addEventListener("click", removeList);

    list.appendChild(checkBox);
    list.appendChild(span);
    list.appendChild(btn);
    toDoList.appendChild(list);

    span.innerText = toDoInput.value;
    btn.innerText = "🗑";
    toDoInput.value = "";

}


function handleSubmit(event) {

    event.preventDefault();
    addList();

}


function init() {
    
    toDoForm.addEventListener("submit", handleSubmit);

}

init();