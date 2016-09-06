$(document).ready(function () {
  $("#random-button").click(function () {
    assignColor();
  });
  $("#reset-button").click(function () {
    reset();
  });


});

function assignColor() {
  var a = randomRGBVal();
  var b = randomRGBVal();
  var c = randomRGBVal();
  var randomColor = "rgb" + "(" + a + "," + " " + b + "," + " " + c + ")";
  newBackground(randomColor);
}


function randomRGBVal (min, max) { //returns random number between 0 and 255
  min = 0;
  max = 256;
  return Math.floor(Math.random() * (max - min) + min);
}

function newBackground (newColor) {
  $("html").css("backgroundColor", newColor);
}

function reset () {
  $("html").css("backgroundColor", "white");
}
