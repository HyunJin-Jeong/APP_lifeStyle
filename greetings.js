const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greetings = document.querySelector(".js-greetings");
const userName = "currentUser",
    showingClassName = "showing";

function paintGreetings(text){
    form.classList.remote(showingClassName);
    greetings.classList.add(showingClassName);
    greetings.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(userName);
    if (currentUser == null){
        // is not
    } else {
        paintGreetings(currentUser);
    }
}

function init(){
    loadName();
}

init();