const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input")
    toDoList = document.querySelector(".js-toDoList")

const toDo = 'toDos';
const toDos = [];

// local Storage에 to do list 저장(Object 저장 불가능 -> string으로 변환)
function saveToDos(){
    localStorage.setItem(toDo, JSON.stringify(toDos));
}

// handleSubmit으로 부터 받은 toDo 값을 HTML tag와 Array에 추가
function paintToDo(text){
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    deleteBtn.innerText = "Delete";
    span.innerText = text
    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObject = {
        text: text,
        id: newId,
    };
    toDos.push(toDoObject);
    saveToDos();
}

// submit 된 값을 목적에 맞는 함수로 보냄
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; // 입력 후 Enter누르면 값이 비어짐
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(toDo);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();