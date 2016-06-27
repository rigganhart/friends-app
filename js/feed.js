module.exports = {

    addFriend: function() {
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

    getFriends: function() {
        let request = new XMLHttpRequest();

        request.addEventListener('load', function() {
            var person = JSON.parse(this.responseText)
            person = person.results[0];
            console.log(person);
            var newPerson = document.createElement('ul');
            newPerson.innerHTML = `
                  <li>
                  <img src= '${person.picture.medium}'>
                  <h3>${person.name.first}</h3>
                  <button name="add">And Friend</button>
                  <button name="delete">No And Friend!!</button>
                  </li>
            `;
            var add = newPerson.querySelector('button[name=add]');
            add.addEventListener('click', function(){
              console.log(`clicked on ${person.name.first} button`);

              addFriend(person);
            });
            var parent = document.getElementById('list');
            parent.appendChild(newPerson);
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
              changeView.addEventListener('click', function(){
                console.log(`clicked ${person.name.last} "a" tag`);
                document.getElementById("feed").removeAttribute("class");
                document.getElementById("details").setAttribute("class", "active");
                var details = document.getElementById("details");
                var personDeets =  document.createElement('div');
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
                    details.innerHTML="";
                    details.appendChild(personDeets);
              });
            }


        });
        request.open('GET', 'https://randomuser.me/api/');
        request.send();



    }


};
