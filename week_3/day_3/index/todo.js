const toDoForm = document.querySelector(".js-todoform"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-todolist"),
    checkbox = document.querySelector("checkbox");


function listBlur() {
    // 체크박스 체크하면 텍스트에 줄이 그어지도록
    
}



function removeList() {
    // 휴지통 누르면 해당 리스트가 지워지도록
}



function addList() {
    const list = document.createElement("li");
    const span = document.createElement("span");
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    const btn = document.createElement("button");
    
    btn.innerText = "🗑";
    span.innerText = toDoInput.value;

    list.appendChild(checkBox);
    list.appendChild(span);
    list.appendChild(btn);
    toDoList.appendChild(list);
    
    toDoInput.value = "";

    listBlur();
}


function handleSubmit(event) {
    event.preventDefault();
    addList();
}


function init() {
    toDoForm.addEventListener("submit", handleSubmit);
    
}

init();