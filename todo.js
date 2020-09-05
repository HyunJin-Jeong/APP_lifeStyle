const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input")
    toDoList = document.querySelector(".js-toDoList")

const toDo = 'toDos';

// handleSubmit으로 부터 받은 toDo 값을 HTML tag에 추가
function paintToDo(text){
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    const span = document.createElement("span");
    span.innerText = text
    li.appendChild(span);
    li.appendChild(deleteBtn);
    toDoList.appendChild(li);
}

// submit 된 값을 목적에 맞는 함수로 보냄
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; // 입력 후 Enter누르면 값이 비어짐
}

function loadToDos(){
    const toDos = localStorage.getItem(toDo);
    if(toDos !== null){
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();