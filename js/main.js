var feed = require('./feed.js')
var hobbies = require('./hobbies.js')
var nav = require('./nav.js')
var details = require('./details.js')

window.addEventListener('load',function(){

  setInterval(feed.getFriends, 5000);

  nav.navigate();





});
