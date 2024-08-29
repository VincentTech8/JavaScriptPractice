// References: https://developer.mozilla.org/en-US/
// https://www.youtube.com/watch?v=Zi-Q0t4gMC8&t=3148s

// Imp: Functions are Object in JavaScript.

// Step 1. Download Node.js (LTS)
// Step 2. Install VS Code
// Step 3. Try the codes below

/* console.log('Hello World'); */
// Use node notes.js in the terminal to execute

// Part 1: Variables

// let course = {
//   name: 'JavaScript for Beginners',
//   hours: 3
// }

// let property = 'hours';

// console.log( course[property] );
// ------------------------------------------------------------------------------------------------------------------------------------- //

// Section 1: JavaScript Variables
// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 1 and 2: Variables and Constants

// using var
// var firstName = 'Steven'; // = is the assignment operator and use camel case format

// using let (modern approach)
// let firstName;
// firstName = 'Steven'; // we can reassign the variable

// Alternatively
// let firstName = 'Steven';
// console.log(firstName);

// We can also do
// let firstName = 'Steven', lastName = 'Garcia';
// console.log(lastName);

// Variables that cannot be changed
// const CHRISTMAS_2024 = '12.25.2024'; // Usually use uppercase
// CHRISTMAS_2024 = '12.26.2024'; // reassignment will return an error to const type
// console.log(CHRISTMAS_2024);

/* Notes:
In JavaScript, you have the flexibility to choose var, let, or const depending on the use case:
1. Use var for function-scoped variables (though it's generally recommended to use let or const instead to avoid scope-related issues).
2. Use let for block-scoped variables that may need to be reassigned.
3. Use const for block-scoped variables that should not be reassigned.
More information:
1. let and const: Variables declared with let and const are block-scoped, meaning they are only accessible within the block they are 
defined in.
2. var: Variables declared with var are function-scoped, meaning they are accessible within the entire function in which they are 
declared, or globally if declared outside of a function. */

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 3: Primitive types
// a. Primitive types: string, number, BigInt, boolean, undefined, null, and Symbol
// b. Reference types: object
// -> Use typeof syntax to check!!!

// 1. String
// let favoriteFruit = 'strawberries';
// let favoriteIceCream = "chocolate";
// let favoriteProgrammingLanguage = `JavaScript`;

/* Notes:
1. Single Quotes ('): Used for simple strings without the need for embedding other expressions or special formatting.
2. Double Quotes ("): Similar to single quotes but useful when the string contains single quotes.
Example: let sentence = "He said, 'Hello!'";
let sentence = "He said, 'Hello!'";
console.log(sentence);
3. Backticks (`): Used for template literals, supporting multi-line strings and string interpolation. (i.e., JavaScript Template Strings)
Example 1: multi-line strings
let multiLineString = `This is a
multi-line string. It can span
multiple lines without any issues.`;
console.log(multiLineString);
console.log(typeof multiLineString);
Example 2: string interpolation - Varible subtitutions
let myName = 'Alice';
let greeting = `Hello, ${myName}!`;
console.log(greeting); // Output: "Hello, Alice!"
Example 3: Quotes inside strings
let text = `He's often called "Johnny"`;
console.log(text);
Example 4: string interpolation - Expression subtitutions
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);
Example 5: HTML Template 
let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
Source: https://www.w3schools.com/js/js_string_templates.asp */

// 2. Integer
// let numberOfDonuts = 12;
// let pi = 3.14; // float

// 3. BigInt
// let veryLargeNumber = 542412451241n
// console.log(veryLargeNumber);

// 4. Boolean
// let lovesCoding = true;

// 5. Undefined
// let favoriteColor; // It is declared but the value is undefined
// console.log(favoriteColor);

// 6. null
// let favoriteFruit = null; // To explicitly clear a value of a variable // Typeof null is object

// 7. Symbol
// const uniqueKey = Symbol();

// 8. (Reference) Object
// let course = {
//     name: 'JavaScript for Beginners',
//     hours: 3
// };

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 4: Dynamic Typing
// In dynamically typed languages, you don't need to explicitly declare the type of a variable when you create it; instead, the type is 
// inferred from the value you assign to it. 
// Example:
// let x = 10; // x is inferred to be a number
// x = "Hello"; // x is now a string

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 5: Objects (Reference Type)
// let course = {
//     name: 'JavaScript for Beginners',
//     hours: 3
// };

// course.name = 'JavaScript Fundamentals';
// console.log(course.name);

// course['name'] = 'JavaScript 101';
// console.log(course['name']);

// let property = 'hours';

// console.log(course[property]);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 6: Arrays

// let productColors = ['blue', 'green'];

// console.log(productColors[0]);

// productColors[0] = 42;
// console.log(productColors[0]);
// console.log(typeof productColors[0]);
// console.log(typeof productColors);
// console.log(productColors.length);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 7: Functions

// function sayHi(name) {
//     console.log('Hi! ' + name);
// }

// sayHi('Steven');

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 8: Type of Functions

// function multiply(num1, num2) {
//     return num1 * num2;
//     // const product = num1 * num2; // This will return undefined since we do not use return keyword
// }

// console.log(multiply(2, 2));

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Section 2: JavaScript Operators

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 1: Arithmetic Operators

// -, +, *, /, %

// a = 3 ** 2; // 3 raise to the power of 2
// console.log(a);

// let b = 10;
// b = b + 1;
// // Synthatic sugar methods
// b += 1;
// b++; // Return the current store value of b and then increment it (Use terminal to see)
// ++b; // Increment it first then return the value of b (Use terminal to see)

// console.log(1 + +"2" +"2");

// 1. +"2" converts the string "2" to the number 2.
// 2. 1 + 2 results in 3.
// 3. 3 + "2" concatenates the number 3 (converted to string) with the string "2", resulting in "32".

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 2: Assignment Operators

// let programmingLanguage = 'JavaScript';
// console.log(programmingLanguage);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 3: Comparison Operators

// >, >=, <, <=

// let num1 = 14;
// let num2 = 10;

// const isNum1Greater = num1 > num2;

// console.log(isNum1Greater);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 4: Equality Operators

// let a = 2;
// let b = '2';

// console.log(a == b); // Loose equality (i.e., JS automatically convert both values into a same data type)
// console.log(a === b); // Strict equality (i.e., numeric is not equal to string)

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 5: The Ternary Operator

// let age = 16;
// const canDrive = age >= 16 ? true : false;
// console.log(canDrive);

// let points = 110;
// const customerType = points > 100 ? 'gold' : 'silver';
// console.log(customerType);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 6: Logical Operators

// || (or), &&(and), !(not), ??(null)

// || (or)

// console.log(true || true);
// console.log(false || true);
// console.log(true || false);
// console.log(false || false);

// let hasReservation = true;
// let acceptingWalkIns = false;
// const hasAccessToTable = hasReservation || acceptingWalkIns;
// console.log(hasAccessToTable);

// && (and)

// console.log(true && true);
// console.log(false && true);
// console.log(true && false);
// console.log(false && false);

// let age = 16;
// let hasCar = true;
// const canDrive = age >= 16 && hasCar;
// console.log(canDrive);

// Note: && operator is operated first than the || operator

// let a = true, b = true, c = true, d = false;
// console.log(a && b || c && d);
// // is similar to
// console.log((a && b) || (c && d));

// ! (not)

// let isClosedOnSunday = true;
// const isRestaurantOpen = !isClosedOnSunday;
// console.log(isRestaurantOpen);

// ?? (null)

// let a = null;
// const result1 = a ?? false;
// // is similar to
// const result2 = (a !== null && a !== undefined) ? a : false; // Synthetic sugar
// console.log(result1);
// console.log(result2);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 7: Logical Operators with Non-booleans

// Note: JavaScript evaluates the expression as either truthy or falsy
// falsy values in JavaScript are undefined, null, 0, false, '' (i.e., empty string), NaN

// console.log(false || 'Steven');

// // Short-circuit evaluation = JavaScript evaluates from left to right and return the first identified truthy immediately
// // without considering the remaining value on the right (i.e., in the example below JavaScript won't evaluate 2)

// console.log(false || 1 || 2);

// let userChosenColor1 = 'blue'; // truthy (i.e., a string)
// let userChosenColor2 = ''; // falsy (i.e., an empty string)
// let defaultColor = 'green'; // truthy (i.e., a string)
// const currentWebsiteColor1 = userChosenColor1 || defaultColor;
// const currentWebsiteColor2 = userChosenColor2 || defaultColor;
// console.log(currentWebsiteColor1);
// console.log(currentWebsiteColor2);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 8: Operator Precedence

// let n = 5 + 5 * 5; // Similar to math
// let n1 = 5 + (5 * 5);
// console.log(n);
// console.log(n1);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Section 3: Control Flow

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 1: If-Else Statements

// let priceOfChocolate = 1.99;
// let hasAmountInCash = 0.99;

// const canBuyChocolate = hasAmountInCash >= priceOfChocolate;

// if (canBuyChocolate) {
//   console.log('Enjoy your purchase');
// } else {
//   console.log('Sorry you do not have enough cash');
// }

// let hour = 15;

// if (hour >= 6 && hour <= 12) {
//   console.log('Serving breakfast');
// } else if (hour > 12 && hour <= 14) {
//   console.log('Serving lunch');
// } else {
//   console.log('Serving dinner');
// }

// // If only 1 line of code in the code block (i.e., inside {}), we can do:

// if (hour >= 6 && hour <= 12) 
//   console.log('Serving breakfast');
// else if (hour > 12 && hour <= 14)
//   console.log('Serving lunch');
// else
//   console.log('Serving dinner');

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 2: Switch-Case Statements - Only used for equality comparisons

// let job = 'Cloud Engineer';

// if (job === 'Software Developer') {
//   console.log('Writes code');
// } else if (job === 'Designer') {
//   console.log('Makes user interface documents');
// } else if (job === 'Cloud Engineer') {
//   console.log('Manages and deploys cloud resources');
// } else {
//   console.log('Works directly with customers');
// }

// switch (job) {
//   case 'Software Developer':
//     console.log('Writes code');
//     break;
//   case 'Designer':
//     console.log('Makes user interface documents');
//     break;
//   case 'Cloud Engineer':
//     console.log('Manages and deploys cloud resources');
//     break;
//   default:
//     console.log('Works directly with customers');
// }

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 3: For Loops - are used to repeat a block of code a specified number of times

// for (initialization; condition; finalExpression) {
//   // Code to be executed
// }

// for (let i = 0; i < 5; i++) {
//   console.log("Iteration number " + i);
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 4: While Loops - is used to repeatedly execute a block of code as long as a specified condition is true

// while (condition) {
//   // Code to be executed
// }

// let count = 0;

// while (count < 5) {
//   console.log('Count is ' + count); // More save to just use "" instead of ''
//   count++;
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7];

// let idx = 0;
// while (idx < numbers.length) {
//   console.log(numbers[idx]);
//   idx++;
// }

// let sum = 0;
// while (true) {
//   console.log('Loop');
//   sum++;

//   if (sum === 3) {
//     break;
//   }
// }

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 5: Do-while Loops - The do...while loop is similar to the while loop, but it guarantees that the block of code 
// is executed at least once before the condition is tested.

// do {
//   // Code to be executed
// } while (condition);

// let count = 0;

// do {
//   console.log("Count is: " + count);
//   count++;
// } while (count < 5);

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 6: Infinite Loops - How to avoid?

// // 1. Ensure Conditions Can Change: Make sure the loop's terminating condition can eventually become false.

// let count = 0;

// while (count < 5) {
//   console.log("Count is: " + count);
//   count++; // Ensure the count increments
// }

// // 2. Use Break Statements: In some cases, you might want to break out of a loop manually based on a condition.

// let count = 0;

// while (true) {
//   console.log("Count is: " + count);
//   count++;
//   if (count >= 5) {
//     break; // Exit the loop
//   }
// }

// // 3. Set Maximum Iterations: To prevent infinite loops in complex conditions, you can set a maximum number of 
// // iterations.

// let count = 0;
// let maxIterations = 1000;

// while (someComplexCondition() && count < maxIterations) {
//   // Your code here
//   count++;
// }

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 7: For-in Loops - iterates over the enumerable properties of an object. It’s generally used for looping through 
// an object's properties.

// const person = { name: "Alice", age: 25, city: "New York" };

// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }

// const course = {
//   name: 'JavaScript for Beginners',
//   duration: 3,
//   sections: 7
// };

// for (const key in course) {
//   console.log(course.key); // Cannot use . notation in for ... in loops
//   console.log(course[key]);
// }

// // Example with Nested for...in Loops

// const people = {
//   person1: { name: "Alice", age: 25 },
//   person2: { name: "Bob", age: 30 },
//   person3: { name: "Charlie", age: 35 }
// };

// for (let personKey in people) {
//   console.log(`Details of ${personKey}:`);
//   for (let detailKey in people[personKey]) {
//     console.log(`${detailKey}: ${people[personKey][detailKey]}`);
//   }
// }

// // Example with a Single for...in Loop

// const people = {
//   person1: { name: "Alice", age: 25 },
//   person2: { name: "Bob", age: 30 },
//   person3: { name: "Charlie", age: 35 }
// };

// for (let personKey in people) {
//   const person = people[personKey];
//   console.log(`Name: ${person.name}, Age: ${person.age}`);
// }

// // Example with Object.keys and forEach

// const people = {
//   person1: { name: "Alice", age: 25 },
//   person2: { name: "Bob", age: 30 },
//   person3: { name: "Charlie", age: 35 }
// };

// Object.keys(people).forEach(personKey => {
//   const person = people[personKey];
//   console.log(`Name: ${person.name}, Age: ${person.age}`);
// });

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part Extra: forEach Loops -  an array method that executes a provided function once for each array element

// array.forEach(function(element, index, array) {
//   // Code to execute for each element
// });

// element: The current element being processed in the array.
// index: (Optional) The index of the current element.
// array: (Optional) The array forEach was called upon.

// const fruits = ["apple", "banana", "orange"];

// fruits.forEach(function(fruit) {
//   console.log(fruit);
// });

// // Alternatively, using Arrow Function (i.e., replacing function() with =>)

// const fruits = ["apple", "banana", "orange"];

// fruits.forEach(fruit => {
//   console.log(fruit)
// });


// // Accessing Index and Array

// const fruits = ["apple", "banana", "orange"];

// fruits.forEach((fruit, index, array) => {
//   console.log(`Index: ${index}, Fruit: ${fruit}`);
//   console.log(array); // The original array
// });

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(number) {
//   console.log(number);
// });

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 8: For-of Loops - used to iterate over the values of iterable objects such as arrays, strings, maps, sets, and 
// more (alternative option: forEach (only for Array))

// for (variable of iterable) {
//   // Code to be executed for each element
// }

// // 1. Iterating Over an Array

// const fruits = ["apple", "banana", "orange"];

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// // 2. Iterating Over a String

// const word = "hello";

// for (const letter of word) {
//   console.log(letter);
// }

// // 3. Iterating Over a Map

// const map = new Map();
// map.set("name", "Alice");
// map.set("age", 25);

// for (const [key, value] of map) {
//   console.log(`${key}: ${value}`);
// }

// // 4. Iterating Over a Set

// const set = new Set([1, 2, 3, 4, 5]);

// for (const value of set) {
//   console.log(value);
// }

// // 4. Using for...of with Objects
// // 4.1. Iterating Over Object Keys

// const person = { name: "Alice", age: 25, city: "New York" };

// for (const key of Object.keys(person)) {
//   console.log(key);
// }

// // 4.2. Iterating Over Object Values

// const person = { name: "Alice", age: 25, city: "New York" };

// for (const value of Object.values(person)) {
//   console.log(value);
// }

// // 4.3. Iterating Over Object Entries

// const person = { name: "Alice", age: 25, city: "New York" };

// for (const [key, value] of Object.entries(person)) {
//   console.log(`${key}: ${value}`);
// }

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 9: Break and Continue

// // 1. break Statement
// // The break statement is used to exit a loop entirely.
// // When break is encountered, the loop stops executing immediately, and the control is transferred to the statement 
// // immediately following the loop.

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break; // Exit the loop when i is 5
//   }
//   console.log(i);
// }
// // Output: 0, 1, 2, 3, 4

// // 2. continue Statement
// // The continue statement is used to skip the current iteration of the loop and proceed to the next iteration.
// // When continue is encountered, the current iteration stops, and the loop moves on to the next iteration.

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     continue; // Skip the rest of the loop body when i is 5
//   }
//   console.log(i);
// }
// // Output: 0, 1, 2, 3, 4, 6, 7, 8, 9

// // More break examples

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break; // exits the loop when i is 5
//   }

//   console.log(i);
// }

// let i = 0;
// while (i < 10) {
//   if (i === 5) {
//     break; // exits the loop when i is 5
//   }

//   console.log(i);
//   i++;
// }

// let i = 0;
// do {
//   if (i === 5) {
//     break;
//   }

//   console.log(i);
//   i++;
// } while (i < 10);

// const obj = { a: 1, b: 2, c: 3 };
// for (let key in obj) {
//   if (key === 'b') {
//     break;
//   }
//   console.log(obj[key]);
// }

// const arr = [1, 2, 3, 4, 5];
// for (let element of arr) {
//   if (element === 3) {
//     break;
//   }
//   console.log(element);
// }

// // More continue examples
// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     continue; // It will skip console.log(i) when i = 5
//   }
//   console.log(i);
// }

// let i = 0;
// while (i < 10) {
//   i++; // We need to move this to the top of if block because When i equals 2, the continue statement is executed, 
//   // which skips the rest of the code inside the loop for that iteration. This means that i++ is never executed when i 
//   // is 2, causing the loop to run indefinitely with i stuck at 2.
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log(i);
// }

// let i = 0;
// do {
//   i++;
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// } while (i < 10);

// const obj = {a: 1, b: 2, c: 3, d: 4};
// for (let key in obj) {
//   if (obj[key] % 2 === 0){
//     continue;
//   }
//   console.log(obj[key]);
// }

// const arr = [1, 2, 3, 4, 5];
// for (let element of arr) {
//   if (element % 2 === 0) {
//     continue;
//   }
//   console.log(element);
// }

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 10:  Exercise: Max of two numbers

// const findMax = (num1, num2) => {
//   if (num1 > num2) {
//     console.log(num1);
//   } else {
//     console.log(num2);
//   }
// }

// function maxNum(num1, num2) {
//   return num1 >= num2 ? num1 : num2;
// }

// console.log(maxNum(7, 2));

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 11:  Exercise: Fizzbuzz

// function fizzBuzz(num) {
//   if (num % 3 === 0 && num % 5 === 0) {
//     return 'FizzBuzz';
//   } else if (num % 3 ===0) {
//     return 'Fizz';
//   } else if (num % 5 === 0) {
//     return 'Buzz';
//   } else {
//     return num;
//   }
// }

// console.log(fizzBuzz(4));

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 12:  Exercise: Even and Odd Numbers

// let arr = [1, 2, 3, 4, 5];
// function findEven(arr) {
//   let emptyarr = [];
//   for (const element of arr) {
//     if (element % 2 === 0) {
//       emptyarr.push(element);
//     }
//   }
//   return emptyarr;
// }

// console.log(findEven(arr));

// let arr1 = [1, 2, 3, 4, 5];
// function findOdd(arr) {
//   let emptyarr = [];
//   for (const element of arr) {
//     if (element % 2 != 0) {
//       emptyarr.push(element);
//     }
//   }
//   return emptyarr;
// }

// console.log(findOdd(arr1));

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Section 4: JavaScript Objects

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 1: Object Literals

// const dog = {
//   name: 'Max',
//   breed: 'Dachshund',
//   age: 5,
//   weightInPounds: 12,
//   eat: function() {
//     console.log('Chomp!');
//   },
//   bark() {
//     console.log('Woof!');
//   }
// }

// console.log(dog.name);
// console.log(dog['name']);
// dog.eat();
// dog['eat']();

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 2: Factory Functions

// function getDog(name, breed, age, weightInPounds) {
//   return {
//     name,
//     breed,
//     age,
//     weightInPounds,
//     eat() {
//       console.log('Chomp!');
//     },
//     bark() {
//       console.log('Woof!');
//     }
//   }
// }

// const anotherDog = getDog('Marley', 'Chocolate Lab', 3, 60);
// console.log(anotherDog);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 3: Constructor Functions - Use PascalNotation and use 'this' keyword

// function Dog(name, breed, age, weightInPounds) {
//   // this = {}; (i.e., has been initialised by default)

//   // Add properties to this
//   this.name = name;
//   this.breed = breed;
//   this.age = age;
//   this.weightInPounds = weightInPounds;

//   this.eat = function() {
//     console.log('Chomp!');
//   }

//   this.bark = function() {
//     console.log('Woof!');
//   }

//   // return this;
// }

// const anotherDog = new Dog('Marley', 'Lab', 3, 60);
// console.log(anotherDog);
// anotherDog.bark();
// console.log(anotherDog.name);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 4: Objects are Dynamic

// const person = {
//   name: 'Steven'
// };

// console.log(person);

// person.favoriteFood = 'tacos';
// console.log(person);

// person['favoriteIceCream'] = 'chocolate';
// console.log(person);

// delete person.favoriteIceCream;
// console.log(person);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 5: The Constructor Property

// const person = {
//   name: 'Steven'
// };

// console.log(person.constructor);

// let newObj = {}; // is similar to
// let newObj = new Object();

// new String(); // instead we use 'Steven'
// new Boolean(); // instead we use true, false
// new Number(); // instead we use 1, 2, 3

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 6: Functions are Objects

// function add(num1, num2) {
//   return num1 + num2;
// }

// const n = add; // we can assign a function

// console.log(n(2, 3));
// console.log(add.length); // to display how many parameters in the function

// function Programmer(name) {
//   this.name = name;
//   this.writeCode = function() {
//     console.log("Code in JavaScript");
//   }
// }

// console.log(Programmer.length);
// console.log(Programmer.constructor);

// const Programmer = new Function('name', `
//   this.name = name;
//   this.writeCode = function() {
//     console.log("Code in JavaScript");
//   }`
// );

// const newProgrammer = new Programmer('Steven');
// newProgrammer.writeCode();

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 7: Value vs Reference types - Different in how they store the memory

// // Primitive data types: number, string, boolean, null, undefined, Symbol, BigInt

// let a = 10;
// let b = a;

// a = 20;

// console.log(a);
// console.log(b);

// let a = {value: 20};
// let b = a;

// a.value = 100;

// console.log(a);
// console.log(b);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 8: Enumerating Properties of an Object

// let numbers = [1, 2, 3, 4, 5];

// for (let element of numbers) {
//   console.log(element);
// }

// const dog = {
//   name: 'Max',
//   age: 5,
//   eyeColor: 'Blue'
// };

// for (let key in dog) {
//   console.log(dog[key]);
// }

// const keys = Object.keys(dog);
// console.log(keys);

// const values = Object.values(dog);
// console.log(values);

// const entries = Object.entries(dog);
// console.log(entries);

// for (const key of Object.keys(dog)) {
//   console.log(key);
// }

// for (const value of Object.values(dog)) {
//   console.log(value);
// }

// for (const entry of Object.entries(dog)) {
//   console.log(entry);
// }

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 9: Cloning an Object

// let a = {value: 10};
// let b = a;

// b.value = 20;

// console.log(a);
// console.log(b);

// // Instead use assign method

// let a = {value: 10};
// let b = {};

// Object.assign(b, a);

// b.value = 20;

// console.log(a);
// console.log(b);

// // Alternatively use spread operator (...)

// let a = {value: 10};
// let b = {...a};

// b.value = 20;

// console.log(a);
// console.log(b);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 10: Garbage Collection - No need to worry about allocating or deallocating memory of the objects since JavaScript
// engine has a garbage collector (i.e., it will self-manage itself and find the variables and objects that are no longer
// being used in the program and it will intelligently free up that memory). 

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 11: The Built in Math Function - refer to developer.mozilla.org

// console.log(Math.round(3.14));
// console.log(Math.round(3.6));
// console.log(Math.floor(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.max(1, 2, 3, 4, 5));
// console.log(Math.min(1, 2, 3));
// console.log(Math.pow(2, 3));
// console.log(Math.sqrt(25));

// let min = 1;
// let max = 10;

// const randomNum = Math.round(Math.random() * (max - min) - min);
// console.log(randomNum);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 12: String Methods

// const myName = 'Steven';
// console.log(typeof myName);

// const anotherName = new String('Joe');
// console.log(typeof anotherName);

// let sentence = "A new sentence.";

// const doesIncludeNew = sentence.includes('new');
// console.log(doesIncludeNew);

// console.log(sentence[3]);

// const startsWithA = sentence.startsWith('A');
// console.log(startsWithA);

// const endsWithA = sentence.endsWith('A');
// console.log(endsWithA);

// let updatedSentence = sentence.replace('new', 'short');
// console.log(updatedSentence);

// let sentence2 = "A dog";
// let updatedSentence2 = sentence2.replace("dog", "cat");
// console.log(updatedSentence2);

// let sentence1 = " A new sentence.  a";
// let trimmedSentence = sentence1.trim();
// console.log(trimmedSentence);
// let trimmedSentenceRight = sentence1.trimStart();
// console.log(trimmedSentenceRight);
// let trimmedSentenceLeft = sentence1.trimEnd();
// console.log(trimmedSentenceLeft);

// const wordsInSentence = sentence.split(' ');
// console.log(wordsInSentence);

// let email = "TestEmail@gmail.com";

// let lowerCaseEmail = email.toLowerCase();
// console.log(lowerCaseEmail);
// let upperCaseEmail = email.toUpperCase();
// console.log(upperCaseEmail);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 13: Template Literals - Provide an alternative syntax to the traditional strings by using back ticks

// let firstName = 'Steven';
// let lastName = 'Garcia';

// let fullName1 = firstName + ' ' + lastName;
// let fullName2 = `${firstName} ${lastName}`; // No need to use a lot of ' ' for a space

// console.log(fullName1);
// console.log(fullName2);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 14: The Date Object

// let currentDate = new Date();
// console.log(currentDate);
// console.log(currentDate.getFullYear());
// console.log(currentDate.getMonth());
// console.log(currentDate.getTimezoneOffset());

// // let specificDate = new Date(year, month, day, hours, minutes, seconds, milliseconds);
// let specificDate = new Date(2024, 7, 10, 12, 30, 0);
// console.log(specificDate); // Outputs: Sat Aug 10 2024 12:30:00 GMT+0000 (Coordinated Universal Time)

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Section 5: JavaScript Arrays

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 1: Introduction to Arrays

// const numbers = [1, 2, 3, 4, 5];

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 2: Adding Elements

// const numbers = [5, 4, 3, 2, 1];

// numbers.push(7, 8, 9);
// console.log(numbers);

// numbers.unshift(25, 24);
// console.log(numbers);

// numbers.splice(1, 0, 25, 24); // (index, #ElemetsToDelete, ValuesToAdd)
// console.log(numbers);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 3: Finding Elements (Primitives)

// const numbers = [5, 4, 3, 2, 1, 3];

// const indexOfThree = numbers.indexOf(3); // Index starts from 0 and from left to right
// console.log(indexOfThree);
// const indexOfFour = numbers.indexOf(4);
// console.log(indexOfFour);

// const lastIndexOfThree = numbers.lastIndexOf(3);
// console.log(lastIndexOfThree);

// const indexOfTen = numbers.indexOf(10);
// console.log(indexOfTen); // If the number 10 is not in the array, it will always return -1
// console.log(numbers[indexOfTen]); // Output: undefined

// if (indexOfTen === -1) {
//   console.log('10 is not found in the array');
// }

// if (!numbers.includes(10)) {
//   console.log('10 is not found in the array');
// }

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 4: Finding Elements (Reference Types)

// const employees = [
//   {
//     id: 1,
//     name: 'Jim'
//   },
//   {
//     id: 2,
//     name: 'Michael Scott'
//   },
//   {
//     id: 3,
//     name: 'Pam'
//   }
// ];

// const employee = employees.find(function(e) {
//   return e.name === 'Pam';
// });
// console.log(employee);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 5: Arrow Functions as Predicates - Commonly used for callback functions

// function add(num1, num2) {
//   return console.log(num1 + num2);
// }

// const add1 = (num1, num2) => {
//   return console.log(num1 + num2);
// };

// add(1, 2);
// add1(1, 2);

// // Alternatively

// const add2 = (num1, num2) => console.log(num1 + num2);
// add2(1, 3);

// // Therefore, part 4 will be

// const employees = [
//   {
//     id: 1,
//     name: 'Jim'
//   },
//   {
//     id: 2,
//     name: 'Michael Scott'
//   },
//   {
//     id: 3,
//     name: 'Pam'
//   }
// ];

// const specialEmployee = employees.find(employee => employee.name === 'Jim'); // JavaScript automatically handles the 
// // parameter (e) for you within the context of the arrow function and find method. There’s no need to declare e 
// // outside the function or initialize it beforehand because it’s scoped and defined within the function as an 
// // argument. (i.e., e = employee in this case)
// console.log(specialEmployee);

// // Asynchronous Callback example

// function fetchData(callback) {
//   console.log("Fetching data...");

//   // Simulate an asynchronous operation using setTimeout
//   setTimeout(function() {
//       console.log("Data fetched successfully!");
//       callback();
//   }, 2000); // Simulates a 2-second delay
// }

// function processData() {
//   console.log("Processing the fetched data.");
// }

// // Fetch data and then process it using a callback
// fetchData(processData);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 6: Removing Elements

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// numbers.pop();
// console.log(numbers);

// const lastElement = numbers.pop();
// console.log(lastElement);
// console.log(`lastElement: ${lastElement}`);
// console.log(numbers);

// const firstElement = numbers.shift();
// console.log(`firstElement: ${firstElement}`);
// console.log(numbers);

// const middleElement = numbers.splice(2, 1); // Removing 1 element from index 2 (i.e., starts from index 2)
// console.log(`middleElement: ${middleElement}`);
// console.log(numbers);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 7: Emptying an Array

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// while (numbers.length > 0) {
//   numbers.pop();
// }
// console.log(numbers);

// numbers.length = 0;
// console.log(numbers);

// const deletedNumbers = numbers.splice(0, numbers.length);
// console.log(deletedNumbers);
// console.log(numbers);

// // Since an array is an Object
// let numbers1 = [1, 2, 3, 4, 5];
// console.log(numbers1);
// let anotherNumbers1 = numbers1;
// numbers1 = [];
// console.log(numbers1);
// console.log(anotherNumbers1);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 8: Combining and Slicing Arrays

// const exampleNumberA = [1, 2, 3];
// const exampleNumberB = [4, 5, 6];

// const combinedArray = exampleNumberA.concat(exampleNumberB);
// console.log(combinedArray);

// // slice(startIndex, endIndex) - the endIndex is exclusive (i.e., not included)
// const firstSlice = combinedArray.slice(0, 4);
// console.log(firstSlice);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 9: Spread Operator (a.k.a, ...)
// To expand elements of an iterable (like an array or a string) or properties of an object into individual elements. 
// It’s commonly used in various scenarios, such as copying arrays, combining arrays or objects, and passing elements 
// of an array as arguments to a function.

// 1. Combining arrays
// const exampleNumberA = [1, 2, 3];
// const exampleNumberB = [4, 5, 6];

// let combinedArray = [...exampleNumberA, ...exampleNumberB];
// console.log(combinedArray);

// 2. Copying an array
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];
// console.log(arr2); // [1, 2, 3]
// arr1[1] = 4;
// console.log(arr1); // [1, 4, 3]
// console.log(arr2); // [1, 2, 3]
// // However, ...
// const arr3 = arr1;
// arr1[1] = 5;
// console.log(arr1); // [1, 5, 3]
// console.log(arr3); // [1, 5, 3]

// 3. Passing array elements as arguments (i.e., Spreading in Function Calls)
// function sum(a, b, c) {
//   return a + b + c;
// }

// const numbers = [1, 2, 3];
// console.log(sum(...numbers)); // 6

// 4. Copying an object
// const obj1 = { a: 1, b: 2 };
// const obj2 = { ...obj1 };
// console.log(obj2);

// 5. Merging objects
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 2, d: 4 };
// const mergedObj = { ...obj1, ...obj2 };
// console.log(mergedObj);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 9: Iterating an Array

// 1. for... of...
// const numbers = [1, 2, 3, 4, 5];

// for (let number of numbers) 
//   console.log(number);

// 2. forEach()
// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((number) => {
//   console.log(number);
// });
// numbers.forEach((number, index) => {
//   console.log(`${index}: ${number}`);
// });

// Since the codeblock only include 1 statement, make it into 1 line. We can also remove the () in the number after
// forEach because it only has 1 parameter
// numbers.forEach(number => console.log(number));
// numbers.forEach((number, index) => console.log(`At index, ${index}: ${number}`));

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 10: Joining Arrays - Will to transform an array to a string

// const numbers = [1, 2, 3, 4, 5];
// const joinedNumbers = numbers.join(', ');
// console.log(joinedNumbers);
// console.log(typeof joinedNumbers);

// const courseName = 'JavaScript for Beginners';
// const lowerCaseCourseName = courseName.toLowerCase();
// const parts = lowerCaseCourseName.split(' ');
// console.log(parts);
// const urlSlug = parts.join('-');
// console.log(urlSlug);

// Is similar to: (But only work if the entire operation only for 1 data type. In this case, string)

// const parts2 = courseName
//   .toLowerCase()
//   .split(' '); // we cannot do .part() because different data type (i.e., an array)
// console.log(parts2);
// const urlSlug2 = parts2.join('-');
// console.log(urlSlug2);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 11: Sorting Arrays

// let characters = ['c', 'd', 'b', 'anton'];
// characters.sort();
// console.log(characters);

// let characters2 = ['c', 'd', 'b', 'anton'];
// characters2.reverse();
// console.log(characters2);

// let employees = [
//   {id: 1, name: 'Jen'},
//   {id: 2, name: 'Steven'},
//   {id: 3, name: 'Andrew'},
//   {id: 4, name: 'Terry'}
// ];

// // Order by name
// employees.sort((a, b) => {
//   // Using ASCII comparison, capital has lower value than lowercase letter
//   const lowerCaseA = a.name.toLowerCase();
//   const lowerCaseB = b.name.toLowerCase();

//   if (lowerCaseA < lowerCaseB) return -1;
//   if (lowerCaseA > lowerCaseB) return 1;
//   return 0;
// });

// console.log(employees);

// What the Return Values Mean:
// -1:
// Indicates that a should come before b in the sorted order.
// Example: If the comparison returns -1 when comparing a and b, a will be placed before b in the array.

// 1:
// Indicates that a should come after b in the sorted order.
// Example: If the comparison returns 1, a will be placed after b in the array.

// 0:
// Indicates that a and b are considered equal in terms of ordering, so their relative order will remain unchanged.
// Example: If the comparison returns 0, the relative positions of a and b stay the same as they were before the sort.

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 12: Testing the Elements of an Array

// // .every() method - Checks if all elements in an array pass a specified test (the callback function).

// const numbers = [2, 4, 6, 8, 10];
// const allAreEven = numbers.every(number => {
//   return number % 2 === 0;
// });
// console.log(`areAllEven: ${allAreEven}`);

// const allAreEven1 = numbers.every(number => number % 2 === 0);
// console.log(`areAllEven: ${allAreEven1}`);

// // .some() method - Checks if at least one element in an array passes a specified test (the callback function).

// const numbers = [1, 3, 5, 7, 8, 9];

// const hasOneEvenNumber = numbers.some(number => number % 2 === 0);
// console.log(`hasOneEvenNumber: ${hasOneEvenNumber}`);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 13: Filtering an Array

// // .filter() method - is used to create a new array with all elements that pass the test implemented by the provided function.

// const numbers = [5, 10, 15, 20, 25];
// const filteredNumbers = numbers.filter(number => number >= 10);

// console.log(filteredNumbers); // Output: [10, 15, 20, 25]

// const employees = [
//   { id: 1, name: 'Alice', role: 'Developer' },
//   { id: 2, name: 'Bob', role: 'Designer' },
//   { id: 3, name: 'Charlie', role: 'Developer' },
//   { id: 4, name: 'Danielle', role: 'Manager' },
// ]

// const developers = employees.filter(employee => employee.role === 'Developer');
// console.log(developers);

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 14: Mapping an Array

// // .map() method - is used to create a new array by applying a function to every element of the original array.

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(number => number * 2);

// console.log(doubled); // Output: [2, 4, 6, 8, 10]

// const characters = ['a', 'b', 'c', 'd'];
// const upperCaseCharacters = characters.map(character => character.toUpperCase());
// console.log(upperCaseCharacters);

// const people = [
//   { name: 'Alice', age: 25, role: 'A', email: 'AliCe@gmail.com' },
//   { name: 'Bob', age: 30, role: 'B', email: 'BoB@gmail.com' }, 
//   { name: 'Charlie', age: 35, role: 'C', email: 'Charlie@gmail.com' },
// ];

// const olderPeople = people.map(person => {
//   return { ...person, age: person.age + 1, test: 'Test', email: person.email.toLowerCase() };
// });

// console.log(olderPeople);

// // Output: [
// //   { name: 'Alice', age: 26, role: 'A', email: 'alice@gmail.com', test: 'Test' },
// //   { name: 'Bob', age: 31, role: 'B', email: 'bob@gmail.com', test: 'Test' },
// //   { name: 'Charlie', age: 36, role: 'C', email: 'charlie@gmail.com', test: 'Test' },
// // ]

// ------------------------------------------------------------------------------------------------------------------------------------- //
// Part 15: Reducing an Array

// // .reduce() method - is used to execute a reducer function on each element of the array, resulting in a single output value.

// // array.reduce(callback(accumulator, currentValue, index, array), initialValue)

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); // Output: 15

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum); // Output: 15

// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 25 },
//   { name: 'David', age: 30 },
// ];

// const groupedByAge = people.reduce((accumulator, currentValue) => {
//   const key = currentValue.age;
//   if (!accumulator[key]) {
//     accumulator[key] = [];
//   }
//   accumulator[key].push(currentValue);
//   return accumulator;
// }, {});

// console.log(groupedByAge);
// // Output: 
// // {
// //   25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
// //   30: [{ name: 'Bob', age: 30 }, { name: 'David', age: 30 }]
// // }


