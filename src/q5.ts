export {};

// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let personNames: string[] = ["Osama\t", "Arshad\n", "Shahbaz  ", "  Abdullah", "Rehman"];

const printNames = (names: string[], printWhiteSpace: boolean) => {
    if(printWhiteSpace){
        for (let name of names)
            console.log(name);
    }
    else {
        for (let name of names)
            console.log(name.trim());
    }
};
console.log("Names With WhiteSpaces:");
printNames(personNames, true);
console.log("Names Without WhiteSpaces:");
printNames(personNames, false);