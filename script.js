/*
  Module Assignment 2
*/

// question 1
//creating an array with 3 string items in it.
var petArray = ["cat", "cow", "dog"];

// question 2
//console log the value of the second item in petArray.
console.log(petArray[1]);

// question 3
// adding a sting called "sheep" to petArray.
petArray.push("sheep");

// question 4
//console log how many items there are in petArray.
console.log(petArray.length);

// question 5
// creating an object called catObject with 3 properties and adding value.
var catObject = {
  name: "Sam",
  colour: "Brown",
  age:  5
}

// question 6
// console log the value of the third property of catObject.
console.log(catObject.age);

// question 7
// Takeing the value of catObject and placeing it inside an array called catArray.
var catArray = [
  {
    name: "Sam",
    colour: "Brown",
    age:  5
  }
];


// question 8
// Looping through catArray and console log each property of each object inside.
for(var index = 0; index < catArray.length; index++) {
    console.log(catArray[index]);
}

// question 9
// createing a function called logToConsole and console log its value inside the function.
function logToConsole (animal){
  console.log(animal);
}

// question 10
// calling logToConsole function and passing in the value "donkey".
logToConsole("donkey")
