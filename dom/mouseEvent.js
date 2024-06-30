const inputEle1 = document.querySelector(".input");
const paraText = document.querySelector(".para");

inputEle1.addEventListener("mousedown", (e) => {
  let xcor = e.pageX;
  let ycor = e.pageY;
  paraText.innerText = `xcor- ${xcor}, ycor ${ycor}`;
});
inputEle1.addEventListener("mousedown", (e) => {
  let xcor = e.clientX;
  let ycor = e.clientY;
  paraText.innerText = `xcor- ${xcor}, ycor ${ycor}`;
});
