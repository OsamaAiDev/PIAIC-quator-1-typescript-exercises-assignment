export {};
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits: Array<string> = ["Mango", "Banana", "Apple", "Orange", "Graps"];

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

if (favorite_fruits.includes("Mango"))
    console.log("You really like mangos!");


if (favorite_fruits.includes("Banana"))
    console.log("You really like Bananas!");

if (favorite_fruits.includes("Orange"))
    console.log("You really like Oranges!");

if (favorite_fruits.includes("Graps"))
    console.log("You really like Graps!");

if (favorite_fruits.includes("Apple"))
    console.log("You really like Apples!");