export {};

// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

function removeGuests(guestRefusedToCome: string[], guest:string[]){
    for (let guest of guestRefusedToCome){
        if(guest.includes(guest)){
            guests.splice(guests.indexOf(guest), 1);
        }
    }
}

function inviteGuests(guets: string[]){
    for (let guest of guests)
    console.log(`Hi,${guest}.I would like to invite you to dinner.`);
}

function append(guests: string[], guest:string) {
    guests.push(guest);
}


let guests: string[] = ["Rehman", "Shahnawaz", "Shahbaz", "Ehtisham", "Bilal"];

let guestRefusedToCome = ["Bilal", "Rehman"];

console.log(`Guests refuse to come on dinner are ${guestRefusedToCome}.`);

removeGuests(guestRefusedToCome, guests);
let newGuets: string[] = ["Arshad", "Ali"];

guests.splice(guests.length, 0, ...newGuets);

inviteGuests(guests);

console.log("Hi i just found a bigger dinner table");

guests.unshift("Abdullah");
guests.splice(guests.length / 2, 0, "Sami");
append(guests, "Adil");
inviteGuests(guests);
