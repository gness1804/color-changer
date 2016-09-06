$(document).ready(function () {
  
});


//fire this upon submit button

function numberGenerate () {
  var result = Math.random();
  assignColor(result);
}

// if number is within a certain range, generate a color

function assignColor (number) {
  if (number < 0.1) {
    color = red;
  }
  else {
    color = blue;
  }
}

numberGenerate();
