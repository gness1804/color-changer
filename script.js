$(document).ready(function () {
  $("#random-button").click(function () {
    assignColor();
  });

  $("#reset-button").click(function () {
    reset();
  });

  function assignColor() { // generates an rgb value with random numbers
    var a = randomRGBVal();
    var b = randomRGBVal();
    var c = randomRGBVal();
    var randomColor = "rgb" + "(" + a + "," + " " + b + "," + " " + c + ")";
    newBackground(randomColor);
  }

  function randomRGBVal (min, max) { //returns random number between 0 and 254
    min = 0;
    max = 254;
    return Math.floor(Math.random() * (max - min) + min);
  }

  function newBackground (newColor) { // assigns random color to background
    $("html").css("backgroundColor", newColor);

  }

  function reset () { // resets background to white
    $("html").css("backgroundColor", "rgb(255, 255, 255)");
  }

}); // end of jQuery body
