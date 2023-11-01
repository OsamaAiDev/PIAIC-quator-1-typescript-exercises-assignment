export {};
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

function removeSpecificGuests(guestRefusedToCome: string[], guest:string[]){
    for (let guest of guestRefusedToCome){
        if(guest.includes(guest)){
            guests.splice(guests.indexOf(guest), 1);
        }
    }
}

function removeGuests(guests: string[]){
    while(guests.length > 2){
        let removedGuest = guests.pop();
        // console.log(`${removedGuest}, sorry i can’t invite you to dinner`);
    }
}

function inviteGuests(guets: string[]){

    if(guests.length === 2){
        for (let guest of guests)
         console.log(`Hi,${guest}. You are still invited.`);
    }
    
    else {
        for (let guest of guests)
        console.log(`Hi,${guest}.I would like to invite you to dinner.`);
    }
}

function append(guests: string[], guest:string) {
    guests.push(guest);
}


let guests: string[] = ["Rehman", "Shahnawaz", "Shahbaz", "Ehtisham", "Bilal"];

let guestRefusedToCome = ["Bilal", "Rehman"];

// console.log(`Guests refuse to come on dinner are ${guestRefusedToCome}.`);

removeSpecificGuests(guestRefusedToCome, guests);
let newGuets: string[] = ["Arshad", "Ali"];

guests.splice(guests.length, 0, ...newGuets);

// inviteGuests(guests);

// console.log("Hi i just found a bigger dinner table");

guests.unshift("Abdullah");
guests.splice(guests.length / 2, 0, "Sami");
append(guests, "Adil");
// inviteGuests(guests);

// console.log("Hi i can invite only two people for dinner");

removeGuests(guests);
// inviteGuests(guests);
console.log("Number of people invited to dinner are " + guests.length);
guests.splice(0);
// console.log(guests);
