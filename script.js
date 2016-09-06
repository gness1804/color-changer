$(document).ready(function () {
  $("#random-button").click(function () {
    numberGenerate();
  });
  $("#reset-button").click(function () {
    reset();
  });


});


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
  else if (number > 0.4 && number < 0.5) {
    color = "rgb(153, 112, 35)";
  }
  else if (number > 0.5 && number < 0.6) {
    color = "rgb(21, 185, 72)";
  }
  else if (number > 0.6 && number < 0.7) {
    color = "rgb(113, 137, 139)";
  }
  else if (number > 0.7 && number < 0.8) {
    color = "rgb(134, 66, 17)";
  }
  else if (number > 0.8 && number < 0.9) {
    color = "rgb(49, 159, 170)";
  }
  else {
    color = "purple";
  }
  $("html").css("backgroundColor", color);
}

function reset () {
  $("html").css("backgroundColor", "white");
}
