let word = 'javaScript' ;
word[0] = 'Y';

console.log(word);
word = "java"

console.log(word);

console.log(word[0]);

/*
we can only assign new values 
to a variable ,
it doesnot allow us to modify it.
*/  


// let see how primitive data type works

let personOneName = "John";
let persontwoName = personOneName;



console.log(persontwoName);

personOneName = "Nash"

console.log( personOneName);

console.log( persontwoName);

let numOne = 13;
let numTwo = 13;

console.log(numOne === numTwo)