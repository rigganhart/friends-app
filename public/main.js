(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports= {

// show details page






};

},{}],2:[function(require,module,exports){
var feed = require('./feed.js')
var hobbies = require('./hobbies.js')
var nav = require('./nav.js')
var details = require('./details.js')

window.addEventListener('load',function(){

  setInterval(feed.getFriends, 5000);

  nav.navigate();





});

},{"./details.js":1,"./feed.js":3,"./hobbies.js":4,"./nav.js":5}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
module.exports = {





  
}

},{}],5:[function(require,module,exports){
module.exports = {

navigate: function(){
  var navFeed = document.getElementById("nav-feed");
  navFeed.addEventListener('click', function(){
    console.log('clicked navFeed');
    document.getElementById("details").removeAttribute("class");
    document.getElementById("hobbies").removeAttribute("class");
    document.getElementById("feed").setAttribute("class", "active");
    })
    var navHobbies = document.getElementById("nav-hobbies");
    navHobbies.addEventListener('click', function(){
      console.log('clicked navHobbies');
      document.getElementById("details").removeAttribute("class");
      document.getElementById("feed").removeAttribute("class");
      document.getElementById("hobbies").setAttribute("class", "active");
      })

  }
}

},{}]},{},[2])