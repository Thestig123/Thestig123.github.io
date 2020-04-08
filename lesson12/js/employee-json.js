const jsonLink = 'json/employees.json';
fetch(jsonLink)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

        for (i=0; i<3; i++) {

            let card = document.createElement('section');
            let div1 = document.createElement('div');
            let div2 = document.createElement('div');
            let image = document.createElement('img');

            let h3name = document.createElement('h3');
            let h3experience = document.createElement('h3');
            let h3certification = document.createElement('h3');
            let h5email = document.createElement('h5');
            

            let p = document.createElement('p');

            h3name.innerHTML = jsonObject[i].name;
            h3experience.innerHTML = jsonObject[i].experience;
            h3certification.innerHTML = jsonObject[i].certification;
            h5email.innerHTML = jsonObject[i].email;

            p.innerHTML = jsonObject[i].biography;

            image.setAttribute('src', "images/" + jsonObject[i].photo.image);
            image.setAttribute('alt', jsonObject[i].photo.description);

            card.appendChild(div1);
            card.appendChild(div2);

            div1.appendChild(image);

            div2.appendChild(h3name);
            div2.appendChild(h3experience);
            div2.appendChild(h3certification);
            div2.appendChild(h5email);
            div2.appendChild(p);

            document.querySelector('.employeecards').appendChild(card);
        }
    });