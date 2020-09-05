const API_KEY = "0dceb76ecb29db46f96159488661a064";
const COORDS = 'coords';

function getWeather(lat, lon){
    fetch(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude,
    };
    saveCoords(coordsObj);
    getWeatger(latitude, longitude)
}

function handleGeoError(){
    console.log("Can't Access get location")
}

// 위치 정보를 엑세스
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

// 위치 정보가 확인 되었는지 확인
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords == null){
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        console.log(parseCoords);
    }
}

function init(){
    loadCoords();
}

init();