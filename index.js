// Your code here
var dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 5}px`;
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left + 5}px`;
  }
}


function moveDodgerDown() {
  var bottomNumbers = dodger.style.bottom.replace("px", "");
  var bottom = parseInt(bottomNumbers, 10);

  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 5}px`;
  }
}

function moveDodgerUp() {
  var bottomNumbers = dodger.style.bottom.replace("px", "");
  var bottom = parseInt(bottomNumbers, 10);

  if (bottom < 380) {
    dodger.style.bottom = `${bottom + 5}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
});
