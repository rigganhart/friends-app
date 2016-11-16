module.exports = {

    // appends the person object to the friend list element
    addFriend: function(person) {
        let friends = document.getElementById('friends');

        let child = document.createElement('div');
        child.innerHTML = `
              <div class = "person">
                <img src="${person.picture.medium}">
                <div class = "details">
                  <h2>${person.name.first}</h2>
                </div>
              </div>
            `;

        friends.appendChild(child);
    },

    // make an http request to the Randomuser API and creates an object called person
    getFriends: function() {
        let request = new XMLHttpRequest();

        request.addEventListener('load', function() {
            var person = JSON.parse(this.responseText)
            person = person.results[0];
            console.log(person);
            var newPerson = document.createElement('li');
            newPerson.innerHTML = `

                  <img src= '${person.picture.medium}'>
                  <h3>${person.name.first}</h3>
                  <button name="add">Add ${person.name.first}</button>
                  <button name="delete">Not Interested</button>

            `;
            var add = newPerson.querySelector('button[name=add]');
            add.addEventListener('click', function() {
                console.log(`clicked on ${person.name.first} button`);

                addFriend(person);
            });
            var remove = newPerson.querySelector('button[name=delete]');
            remove.addEventListener('click', function() {
                console.log(`clicked on ${person.name.first} delete`);

                // noFriend(person);
            });
            newPerson.classList.add('person');

              if (person.gender === "male") {
                newPerson.classList.add('boy');
              } else if (person.gender === "female") {
                newPerson.classList.add('girl');
              };

            var parent = document.getElementById('list');
            parent.appendChild(newPerson);

// adds a friend to the friends list and allows to view an info page about each person
            function addFriend() {
                let friends = document.getElementById('friends');

                let child = document.createElement('div');
                child.innerHTML = `
                      <div class = "person">
                        <img src="${person.picture.medium}">
                        <div class = "details">
                          <a href="#"><h2>${person.name.first}</h2></a>
                        </div>
                      </div>
                    `;

                friends.appendChild(child);

                var changeView = child.querySelector('a');
                changeView.addEventListener('click', function() {
                    console.log(`clicked ${person.name.last} "a" tag`);
                    document.getElementById("feed").removeAttribute("class");
                    document.getElementById("details").setAttribute("class", "active");
                    var details = document.getElementById("details");
                    var personDeets = document.createElement('div');
                    personDeets.innerHTML = `
                    <div class = "about">
                    <img src="${person.picture.large}">
                    <h1>${person.name.first} ${person.name.last}</h1>
                    </div>
                    <div class = "details">
                    <h1>City: ${person.location.city}</h1>
                    <h1> Phone: ${person.phone}</h1>
                    <h2> Hobbies:</h2>
                    </div>
                    `;
                    details.innerHTML = "";
                    details.appendChild(personDeets);
                });
            } //end of add friend with details


        });
        request.open('GET', 'https://randomuser.me/api/');
        request.send();



    }


};
