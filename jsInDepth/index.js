// const readLineSync = require("readline-sync");

// const userName = readLineSync.question("may i know your Name?");

// console.log(`welcome ${userName} from Delhi.`);

// let brotherName = null;

// let name = "salman";

// let homeName = "Annu";
// let result = name && brotherName && homeName;

// console.log(result);

// ternaryOperator
// let name;

// let realName = name ? name : "Annu";

// console.log(realName);

// let marksScored = 41;

// let score = marksScored < 40 ? "failed" : "passed";
// console.log(score);

let marksGet = 82;

let score =
  marksGet < 40
    ? "failed"
    : marksGet < 60
    ? "passed"
    : marksGet < 70
    ? "1st division"
    : marksGet < 80
    ? "distinction"
    : "Genius";
console.log(score);
