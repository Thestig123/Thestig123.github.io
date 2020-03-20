const townURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(townURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns']

    
        towns.forEach(towns => {
            if(towns.name == "Preston" || towns.name == "Fish Haven" || towns.name == "Soda Springs") {

            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let p = document.createElement('p');
            let image = document.createElement('img');
        
            let townName = `${towns.name}`;
            let motto = `${towns.motto}`;
            let founded = `Founded: ${towns.yearFounded} <br>`;
            let population = `Population: ${towns.currentPopulation} <br>`;
            let rainFall = `RainFall: ${towns.averageRainfall} <br>`;

            h2.innerHTML = townName;
            h3.innerHTML = motto + '<br>';
            p.innerHTML = founded + population + rainFall;
            image.setAttribute('src','images/' + towns.photo);
            image.setAttribute('alt', townName);

            card.appendChild(h2);
            card.appendChild(h3);
            card.appendChild(p);
            card.appendChild(image);

            document.querySelector('.towns').appendChild(card);
        }
            });
        });
