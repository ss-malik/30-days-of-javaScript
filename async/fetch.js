const button = document.getElementById("button");
const response = document.getElementById("response");
button.addEventListener("click", getText);

function getText() {
  fetch("test.txt")
    .then(function (res) {
      return res.text();
    })
    .then((data) => (response.innerText = data))
    .catch((err) => console.log(err));
}
