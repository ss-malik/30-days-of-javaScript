// function a(callback) {
//   console.log("hii");
//   callback();
// }

// function b() {
//   console.log("bye");
// }

// a(b);

// // setTimeout

// setTimeout(b, 4000);

// console.log("hii");
// setTimeout(() => {
//   console.log("bye");
// }, 2000);

// const url = "https://mockdata.prakashsakari.repl.co/users";

// fetch("https://dummyjson.com/users")
//   .then((res) => res.json())
//   .then(console.log);

const Url = "https://dummyjson.com/users";
let promise = fetch(Url);

promise
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log({ data });
    console.log(data.users[0]);
  })
  .catch(function () {
    console.log("error occured");
  });

// function fetchData(callback) {
//   setTimeout(() => {
//     callback("Data received");
//   }, 2000);
// }

// fetchData((message) => {
//   console.log(message);
// });
