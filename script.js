$(document).ready(function () {
  $("#random-button").click(function () {
    numberGenerate();
  });
  $("#reset-button").click(function () {
    reset();
  });


}); // end of jQuery body


// function numberGenerate (min, max) {
//   var a =
//
//   var result = Math.random();
//   assignColor(result);
// }

function randomRGBVal (min, max) { //returns random number between 0 and 255
  min = 0;
  max = 256;
  return Math.random() * (max - min) + min;
}

console.log(randomRGBVal());

// if number is within a certain range, generate a color

function assignColor (number) {
  var color = "rgb(a, b, c)";
  var a;
  var b;
  var c;

  $("html").css("backgroundColor", color);
}

function reset () {
  $("html").css("backgroundColor", "white");
}
