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
  console.log(a, b, c);
}


function randomRGBVal (min, max) { //returns random number between 0 and 255
  min = 0;
  max = 256;
  return Math.floor(Math.random() * (max - min) + min);
}



// if number is within a certain range, generate a color

// function assignColor (number) {
//   var color = "rgb(a, b, c)";
//   var a;
//   var b;
//   var c;
//
//   $("html").css("backgroundColor", color);
// }
//
// function reset () {
//   $("html").css("backgroundColor", "white");
// }
