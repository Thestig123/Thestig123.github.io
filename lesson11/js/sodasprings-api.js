const currentWeather = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=744fa0fd0a267f14e0b7ed92a900b17a';

fetch(currentWeather)
    .then(function (response) {
        return response.json();
    })
    //function for sending live data to weatherbox
    .then(function (jsonObject) {

        function windchilloperation() {
            var avgtmp = jsonObject.main.temp;
            var windspeed = jsonObject.wind.speed;

            if (avgtmp <= 50 && windspeed >= 5) {

                var windchillcal = 35.74 + 0.6215 * avgtmp - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * avgtmp * Math.pow(windspeed, 0.16);

                return windchillcal.toFixed(2) + "&#176;F";
            } else {
                return "N/A"
            }

        }

        document.getElementById('currently').textContent = jsonObject.weather[0].main;
        document.getElementById('temp').textContent = jsonObject.main.temp;
        document.getElementById('windchill').innerHTML = windchilloperation();
        document.getElementById('humidity').textContent = jsonObject.main.humidity;
        document.getElementById('windspeed').textContent = jsonObject.wind.speed;
    });


//start on five day forcast
const foreCast = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=744fa0fd0a267f14e0b7ed92a900b17a';



fetch(foreCast)
    .then((response) => response.json())
    .then((jsonObject) => {

        const fivedayforecast = jsonObject.list.filter(x => x.dt_txt.includes('18:00:00'));

        fivedayforecast.forEach(fivedayforecast => {
            let day = document.createElement('section');
            let h4 = document.createElement('h4');
            let h3 = document.createElement('h3');
            let image = document.createElement('img');

            h4.innerHTML = `${fivedayforecast.main.temp}` + "&#176 F";
            let icon;
            let description;

            for (let count = 0; count < 5; count++) {
                icon = 'https://openweathermap.org/img/w/' + fivedayforecast.weather[0].icon + '.png';
                description = fivedayforecast.weather[0].description;
            }

            image.setAttribute('src', icon);
            image.setAttribute('alt', description);

            day.appendChild(h4);
            day.appendChild(image);

            document.querySelector('.forecast').appendChild(day);

        });
    });