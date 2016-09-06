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
  if (number < 0.5) {
    color = "red";
  }
  else {
    color = "blue";
  }
  $("html").css("backgroundColor", color);
}

function reset () {
  $("html").css("backgroundColor", "white");
}
