const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greetings = document.querySelector(".js-greetings");

const userName = "currentUser",
    showingClassName = "showing";

// current value(userName)을 local Storage에 기억시키는 함수
function saveName(text){
    localStorage.setItem(userName, text);
}

// 입력받은 이름(current value) 값을 목적을 위한 함수로 보냄
function handleSubmit(event){
    event.preventDefault(); // Enter 시 새로고침되는 동작을 막는다(기본 동작)
    const currentValue = input.value;
    paintGreetings(currentValue);
    saveName(currentValue);
}

// form을 통해 입력받으면 목적을 위한 함수로 보냄
function askForName(){
    form.classList.add(showingClassName);
    form.addEventListener("submit", handleSubmit);
}

// 입력받은 이름으로 환영하는 문구를 띄움
function paintGreetings(text){
    form.classList.remove(showingClassName);
    greetings.classList.add(showingClassName);
    greetings.innerText = `Welcome ${text}!`;
}

// 기존에 입력받은 이름이 있는지 확인하는 함수
function loadName(){
    const currentUser = localStorage.getItem(userName);
    if (currentUser == null){
        askForName();
    } else {
        paintGreetings(currentUser);
    }
}

// initial
function init(){
    loadName();
}

init();