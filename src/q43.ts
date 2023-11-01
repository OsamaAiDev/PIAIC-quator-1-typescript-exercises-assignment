export {};

// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function create_pizza(...items: string[]){
    let summary: string = "";
    for (let item of items){
        summary += item + " ";
    }
    console.log(`You added this item on your sandwitch: ${summary}`);
}

create_pizza("cheese", "bread", "onion");
create_pizza("greenChilli", "bread", "onion");
create_pizza("lemon", "bread", "onion");