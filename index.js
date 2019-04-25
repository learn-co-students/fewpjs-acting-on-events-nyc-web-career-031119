var dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.left;
dodger.style.bottom;
dodger.style.bottom = "0px";

// let game = document.getElementById("game");
// let p = document.createElement("p")
// p.color = "#000000"
// p.innerText = "I am here"
// game.appendChild(p)

// document.addEventListener("keydown", function(e) {
//   console.log(e.key);
// });

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10)
  // console.log(left)

  if (left > 0) {
    dodger.style.left = `${left-1}px`
  }
}



function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left + 1}px`
  }
}
