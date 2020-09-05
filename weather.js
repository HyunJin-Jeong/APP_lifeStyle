const weather = document.querySelector(".js-weather");

const API_KEY = "0dceb76ecb29db46f96159488661a064";
const COORDS = 'coords';

// 위도, 경도를 불러와 API에 액세스
function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `Temperature: ${temperature}
        Place: ${place}`
    })
}

// 액세스한 위도, 경도를 local Storage에 저장
function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

// 위도와 경도를 불러와 목적에 맞는 함수로 전달
function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeatger(latitude, longitude)
}

// 위치를 액세스하지 못할 때 메세지 출력
function handleGeoError(){
    console.log("Can't Access geo location")
}

// 위치 정보를 엑세스
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

// 위치 정보가 확인 되었는지 확인
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
        console.log(parsedCoords);
    }
}

function init(){
    loadCoords();
}

init();