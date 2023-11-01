export {};

// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

interface Quote {
    author: string,
    quote: string
};
let quote: Quote = {
    author: "Osama",
    quote: "Never Give Up"
};

console.log(`${quote.author} once Said, "${quote.quote}."`);

