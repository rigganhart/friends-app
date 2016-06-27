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
