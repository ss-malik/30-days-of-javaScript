const inputEle = document.querySelector(".input");
const para = document.querySelector(".para");

function inputFunction() {
  para.innerText = inputEle.value;
}

// inputEle.addEventListener("change", inputFunction);
// inputEle.addEventListener("input", inputFunction);
// inputEle.addEventListener("keyup", inputFunction);
inputEle.addEventListener("keydown", inputFunction);
