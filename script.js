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
  var color;
  if (number < 0.1) {
    color = "red";
  }
  else if (number > 0.1 && number < 0.2) {
    color = "blue";
  }
  else if (number > 0.2 && number < 0.3) {
    color = "yellow";
  }
  else if (number > 0.3 && number < 0.4) {
    color = "magenta";
  }
  $("html").css("backgroundColor", color);
}

function reset () {
  $("html").css("backgroundColor", "white");
}
