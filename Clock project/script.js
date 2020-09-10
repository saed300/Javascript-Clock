setInterval(theClock, 1000);

var secondHand = document.querySelector('[data-second-hand]');
var minuteHand = document.querySelector('[data-minute-hand]');
var hourHand = document.querySelector('[data-hour-hand]');

function theClock() {
  var today = new Date()
  var myseconds = today.getSeconds() / 60;
  var myminutes = (myseconds + today.getMinutes()) / 60;
  var myhours = (myminutes + today.getHours()) / 12;
  theRotation(secondHand, myseconds);
  theRotation(minuteHand, myminutes);
  theRotation(hourHand, myhours);
}

function theRotation(element, myrotate) {
  element.style.setProperty('--rotation', myrotate * 360);
};


theClock()





