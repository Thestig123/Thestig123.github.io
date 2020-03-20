const currentWeather = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=744fa0fd0a267f14e0b7ed92a900b17a';

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
const foreCast = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=744fa0fd0a267f14e0b7ed92a900b17a';

fetch(foreCast)
    .then((response) => response.json())
    .then((jsObject) => {

        const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.log(fivedayforecast)

        fivedayforecast.forEach(fivedayforecast => {
            let day = document.createElement('section');
            let h4 = document.createElement('h2');
            let image = document.createElement('img');

            h4.innerHTML = `${fivedayforecast.main.temp}` + "&#176 F";
        
            let icon;

            for(let count = 0; count < fivedayforecast.length; count++)
            {
            icon = 'https://openweathermap.org/img/w/' + foreCast[count].weather[0].icon + '.png'
            }

            image.setAttribute('src', icon);

            day.appendChild(h4);
            day.appendChild(image);

            document.querySelector('.forecast').appendChild(day);

        });
    });