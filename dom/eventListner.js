const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const countBtn = document.querySelector("#count");

// startBtn.addEventListener("click", () => console.log("clicked"));

// to change text content

// function textChange() {
//   startBtn.innerText = "Begin";
// }

function toggleText() {
  if (startBtn.innerText === "Start") {
    startBtn.innerText = "Begin";
  } else {
    startBtn.innerText = "Start";
  }
}

startBtn.addEventListener("click", toggleText);

let countNo = 0;
function countFunction() {
  countNo = countNo + 1;
  countBtn.innerText = "Count " + countNo;
}
// function colorFunction() {
//   stopBtn.style.backgroundColor = "red";
// }
function colorFunction() {
  stopBtn.classList.toggle("btn-red");
}

countBtn.addEventListener("click", countFunction);

stopBtn.addEventListener("click", colorFunction);
