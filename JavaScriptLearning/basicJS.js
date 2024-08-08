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


