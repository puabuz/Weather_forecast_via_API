const param = {
    "url" : "https://api.openweathermap.org/data/2.5/",
    "appid" : "ae4fe3d4baf48db7bced03a89dc0d59c"
}

function getWeather() {
    const cityId = document.querySelector('#city').value;

    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
    .then(weather => {
            return weather.json();
        }).then(showWeather);
}

function showWeather(data) {
    console.log(data);
    document.querySelector('.temp').innerHTML = parseInt(data.main.temp) + '&deg' + '<br>' + '<span>Температура</span>' + '<hr>';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '<span> &#37</span>' + '<br>' + '<span>Влажность</span>' + '<hr>';
    document.querySelector('.pressure').innerHTML = data.main.humidity + '<br>' + '<span>Давление</span>' + '<hr>';
}

getWeather()

document.querySelector('#city').onchange = getWeather