export {};

// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
let country = "Pakistan";
console.log("Tests for equality and inequality with strings");
console.log(country == "Pakistan");
console.log(country != "Pakistan");
// • Tests using the lower case function
console.log("Testing with lower case function");
console.log(country.toLowerCase() == "Pakistan");
console.log(country.toLowerCase() != "Pakistan");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let no = 4;
console.log("Numerical testing");
console.log(no > 4);
console.log(no < 4);
console.log(no == 4);
console.log(no != 4);
console.log(no >= 4);
console.log(no <= 4);

// • Tests using "and" and "or" operators
console.log("Tests using  and or operators");
console.log(no > 4 || no ==4);
console.log(no < 4 && no ==4);
// • Test whether an item is in a array
let students = ["osama", "hassan"];
console.log("Test whether an item is in a array");
console.log(students.includes("osama"));
// • Test whether an item is not in a array
console.log("Test whether an item is not in a array");
console.log(students.includes("sama"));