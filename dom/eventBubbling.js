const form = document.querySelector("#form");
const div = document.querySelector("#division");
const paragraph = document.querySelector("#paragraph");

paragraph.addEventListener("click", () => alert("paragraph is clicked"));
div.addEventListener("click", () => alert("div is clicked"));
form.addEventListener("click", () => alert("form is clicked"));

// event5Capturing

paragraph.addEventListener("click", () => alert("paragraph is clicked"), true);
div.addEventListener("click", () => alert("div is clicked"), true);
form.addEventListener("click", () => alert("form is clicked"), true);

// delegation

const delegation = document.querySelector("#delegation");

delegation.addEventListener("click", (e) => console.log(e.target));
delegation.addEventListener("click", (e) => console.log(e.target.innerText));
delegation.addEventListener("click", (e) =>
  e.target.classList.toggle("btn-red")
);
