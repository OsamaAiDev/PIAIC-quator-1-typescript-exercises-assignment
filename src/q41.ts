export {};
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function show_magicians(magicians: string[]) {
    for (let magician of magicians)
        console.log(magician);
}

function make_great(magicians: string[]){
    for (let index in magicians){
        magicians[index] = "Great " + magicians[index];
    }
}
let magicians: string[] = ["albert", "kaboo", "aslam"];
make_great(magicians);
show_magicians(magicians);