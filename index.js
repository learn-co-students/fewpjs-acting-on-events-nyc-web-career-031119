// Your code here
let dodger = document.getElementById("dodger");

function moveDodgerRight() {
  let left = parseInt(dodger.style.left)
  if (left <= 390) {
    dodger.style.left = `${left + 1}px`
  }
}

function moveDodgerLeft() {
  // let leftNumbers = dodger.style.left.replace('px', '');
  // let left = parseInt(leftNumbers, 10)
  let left = parseInt(dodger.style.left)
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
  else if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
})
