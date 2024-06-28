function wrapper() {
  return "welcome home";
}

function greetMessage(name, callback) {
  let message = callback();
  return `hello ${name} ${message}`;
}

let output = greetMessage("salman", wrapper);

console.log(output);

// Map

let arr = [1, 2, 3, 4, 5];
function square(num) {
  return num ** 2;
}
let squareArray = arr.map(square);

console.log(arr);
console.log(squareArray);
