// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

export {};

const tittleCase = (name: string): string =>{
    const words = name.toLowerCase().split(' ');

    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); 
}

let name = "Mian Osama arshad";

console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(tittleCase(name));