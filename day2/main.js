let word = 'javaScript' ;
word[0] = 'Y';

console.log(word); 
// javaScript (immutable {non-modifiable})
word = "java"

console.log(word);
// java
// we can only reassign it

console.log(word[0]);
// j
// althouth we tried to modify it as it is immutable we cannot modify it.
/*
we can only assign new values 
to a variable ,
it doesnot allow us to modify it.
*/  


// let see how primitive data type works

let personOneName = "John";
let persontwoName = personOneName;



console.log(persontwoName);
// john
personOneName = "Nash"

console.log( personOneName);
// nash
console.log( persontwoName);
// john

// this is clear from this example js stores both these values in different places


let numOne = 13;
let numTwo = 13;

console.log(numOne == numTwo)
// true
console.log(typeof numTwo)
// number

let floatNo = -6.5
console.log(typeof floatNo);
// number

/* let do some hands on non-primitive data type */


let arrayOne = [1,2,3]; 
let arrayTwo = [1,2,3]; 

console.log(arrayOne == arrayTwo)
// false 

// As you can see, an array, which is a non-primitive data type is mutable. Non-primitive data types cannot be compared by value. Even if two non-primitive data types have the same properties and values, they are not strictly equal.

// we cannot compare non-primitive data types like this 

arrayOne[0] = 10
console.log(arrayOne)
// [10,2,3]
// arrays are mutable

let arrayThree = ["a",2,3]

let arrayFour = arrayThree

console.log(arrayThree == arrayFour)
// true
// Rule of thumb, we do not compare non-primitive data types. Do not compare arrays, functions, or objects. Non-primitive values are referred to as reference types, because they are being compared by reference instead of value. Two objects are only strictly equal if they refer to the same underlying object.



// declaring number data types
arrayThree[0] = 1
console.log(arrayThree)
console.log(arrayFour)
// [1,2,3]

// true as they both point to same reference object & if we change values of one other will also show same changes

// if dont want other object to mutate with parent then use spred operator to create new object independent from parent read more about it

// lets play with numbers

let age = 35
const gravity = 9.81  //  use const for non-changing(constant) values, gravitational constant in  m/s2
let mass = 68         // mass in Kilogram
const PI = 3.14       // pi a geometrical constant

// More Examples
const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37      // oC average human body temperature, which is a constant

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)
// we can also console many variables in single line

// 35 9.81 68 3.14 100 37