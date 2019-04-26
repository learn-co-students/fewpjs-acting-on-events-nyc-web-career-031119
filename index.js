// Your code here
var dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.left; // "180px"
dodger.style.right; // "180px"

dodger.style.bottom = "0px";


// document.addEventListener("keydown", function(e) {
//   if (e.key === "ArrowLeft") {
//     var leftNumbers = dodger.style.left.replace("px", "");
//     var left = parseInt(leftNumbers, 10);
//
//     dodger.style.left = `${left - 9}px`;
//   }
// });

// var dodger = document.getElementById("dodger");
function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 9}px`;
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left + 9}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }  else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
