const button = document.querySelector("#btnAdd");
const text = document.querySelector("#text")
const list = document.querySelector("#list");

// Add 버튼을 누르면 item_text 안의 텍스트가 있는 체크박스가 생성된다


    button.addEventListener("click", clickButton) 
    
    function clickButton() {
        const temp = document.createElement('li');
        temp.innerHTML = text.value;
        list.appendChild(temp);
        
    }




