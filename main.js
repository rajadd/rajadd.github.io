var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/boo.jpg') {
      myImage.setAttribute ('src','images/boo1.png');
    } else {
      myImage.setAttribute ('src','images/boo.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Chief Bogo, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Chief Bogo, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
