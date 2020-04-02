const apiURL = 'https://api.openweathermap.org/data/2.5/weather?zip=83549&units=imperial&APPID=744fa0fd0a267f14e0b7ed92a900b17a'

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        document.getElementById('current-feelslike').textContent = jsObject.main.feels_like;
        document.getElementById('current-humidity').textContent = jsObject.main.humidity;
        document.getElementById('current-windspeed').textContent = jsObject.wind.speed;
        document.getElementById('current-windspeed').textContent = jsObject.wind.speed;


        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;

        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);
    })