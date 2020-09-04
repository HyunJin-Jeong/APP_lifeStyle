console.dir(window.addEventListener)

/*
const title = document.querySelector("#title");

// title을 클릭할 때마다 title의 색을 바꿔보자.
const baseColor = "rgb(0, 0, 0)"
const otherColor = "rgb(255, 255, 255)"

function handleClick(){
    const currentColor = title.style.color;
    if (currentColor == baseColor){
        title.style.color = otherColor;
    } else {
        title.style.color = baseColor;
    }
}

function init(){
    title.style.color = baseColor;
    title.addEventListener("click", handleClick); 
}
init();

// title을 클릭하면 내 이름이 계속 돌아가면서 제목이 되는 상황을 만들어보자.
const fullName = ['Jeong', 'Hyun', 'Jin']
function handleClick(){
    if (title.innerHTML == fullName[0]){
        title.innerHTML = fullName[1];
    } else if (title.innerHTML == fullName[1]){
        title.innerHTML = fullName[2]
    } else {
        title.innerHTML = fullName[0]
    }
}

function init(){
    title.innerHTML = fullName[0];
    title.addEventListener("click", handleClick);
}
init();
*/