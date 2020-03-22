const events = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(events)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns']

    
        towns.forEach(towns => {
            if(towns.name == "Fish Haven") {

            let card = document.createElement('section');
            let firstH2 = document.createElement('h4');
            let secondH2 = document.createElement('h4');
            let thirdH2 = document.createElement('h4');

            firstH2.innerHTML = `${towns.events[0]}`;
            secondH2.innerHTML = `${towns.events[1]}`;
            thirdH2.innerHTML = `${towns.events[2]}`;

            card.appendChild(firstH2);
            card.appendChild(secondH2);
            card.appendChild(thirdH2);

            document.querySelector('.events').appendChild(card);
        }
            });
        });
