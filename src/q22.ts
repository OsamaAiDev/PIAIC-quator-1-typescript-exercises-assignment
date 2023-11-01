export {};

// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let person = "Osama";
let no = 4;
let anotherNo = 4;

// 1
console.log("Is person == 'Osama' ? I predict True.");
console.log(person == 'Osama');

console.log("Is person == 'osama' ? I predict False.");
console.log(person == 'osama');

// 2
console.log("Is person.toLowerCase() == 'osama' ? I predict True.");
console.log(person.toLowerCase() == 'osama');

console.log("Is person == 'Osama' ? I predict False.");
console.log(person == 'Osama');

// 3
console.log("Is no == '4' ? I predict True becuase == perform val comparsion.");
console.log(no == '4');

console.log("Is no === '4' ? I predict False");
console.log(no === '4');

// 4
console.log("Is no == anotherNo ? I predict True");
console.log(no == anotherNo);

console.log("Is no === anotherNo ? I predict True");
console.log(no === anotherNo);

// 5
console.log("Is no > anotherNo ? I predict False");
console.log(no > anotherNo);

console.log("Is no.toString() === anotherNo ? I predict False");
console.log(no.toString() === anotherNo);

console.log("Is no.toString() == anotherNo ? I predict True");
console.log(no.toString() == anotherNo);

console.log("Is no === '4' ? I predict False");
console.log(no === '4');