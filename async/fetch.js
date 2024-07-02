const button = document.getElementById("button");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

const response = document.getElementById("response");

button.addEventListener("click", getText);
button1.addEventListener("click", getJson);
button2.addEventListener("click", getApi);

// get local Text
function getText() {
  fetch("test.txt")
    .then(function (res) {
      return res.text();
    })
    .then((data) => (response.innerText = data))
    .catch((err) => console.log(err));
}

// get local Json
function getJson() {
  fetch("posts.json")
    .then(function (res) {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let output = "";
      data.map((post) => (output += `<li>${post.title}</li>`));
      response.innerHTML = output;
    })
    .catch((err) => console.log(err));
}
// get data from Api
function getApi() {
  fetch("https://api.github.com/users")
    .then(function (res) {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let output = "";
      data.map((user) => (output += `<li>${user.login}</li>`));
      response.innerHTML = output;
    })
    .catch((err) => console.log(err));
}
