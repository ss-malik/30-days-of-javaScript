// iterating in strings
let string = "My name is Salman Malik";

for (let char of string) {
  if (char === "S") {
    break;
  } else {
    console.log(char);
  }
}

/*
for (let char of string) {
  console.log(char);
}

// for in loop in string give index of each character 

for (let indexOfChar in string) {
  console.log(indexOfChar);
}

console.log(`String length is ${string.length}`);



// for in loop in arr gives index of each element of array

let Arr = string.split(" ");

for (let index in Arr) {
  // console.log(index);
}
// for of loop in arr gives each element of array

for (let ele of Arr) {
  console.log(ele);
}
*/
