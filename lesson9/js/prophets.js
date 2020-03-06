const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];

    prophets.forEach(prophet => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p = document.createElement('p');
      let image = document.createElement('img');


      let fullname = `${prophet.name} ${prophet.name}`;
      let dateofbirth = `${prophet.birthdate}`;
      let placeofbirth = `${prophet.birthplace}`;
      
      h2.innerHTML = fullname;
      p.innerHTML = dateofbirth + '<br>' + placeofbirth;

      image.setAttribute('src', prophet.imageurl);
      image.setAttribute('alt', fullname);

      card.appendChild(h2);
      card.appendChild(p);
      card.appendChild(image);

      document.querySelector('.cards').appendChild(card);
    });
  });