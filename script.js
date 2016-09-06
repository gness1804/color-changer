$(document).ready(function () {
  $("#random-button").click(function () {
    numberGenerate();
  });
  $("#reset-button").click(function () {
    reset();
  });


}); // end of jQuery body


function numberGenerate () {
  var result = Math.random();
  assignColor(result);
}

// if number is within a certain range, generate a color

function assignColor (number) {
  var color = "rgb(a, b, c)";
  var a;
  var b;
  var c;
  if (number < 0.5) {
    a = 100;
    b = 100;
    c = 100;
  }
  else if (number >= 0.5) {
    a = 200;
    b = 200;
    c = 200;
  }
  $("html").css("backgroundColor", color);
}

function reset () {
  $("html").css("backgroundColor", "white");
}
