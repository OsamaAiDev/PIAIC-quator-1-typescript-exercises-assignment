export {};

// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

/*
Name: Osama
Date: 22/10/2023
Store the name in variable and simply print it on console.
*/

let name = "Osama";
console.log(`Hello ${name}, would you like to learn some Python today?`);

/*
Name: Osama
Date: 22/10/2023
Store the quote in obj and display it on console.
*/

interface Quote {
    author: string,
    quote: string
};
let quote: Quote = {
    author: "Osama",
    quote: "Never Give Up"
};

console.log(`${quote.author} once Said, "${quote.quote}."`);
