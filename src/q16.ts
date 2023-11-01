export {};

// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

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
        console.log(`${removedGuest}, sorry i can’t invite you to dinner`);
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

console.log(`Guests refuse to come on dinner are ${guestRefusedToCome}.`);

removeSpecificGuests(guestRefusedToCome, guests);
let newGuets: string[] = ["Arshad", "Ali"];

guests.splice(guests.length, 0, ...newGuets);

inviteGuests(guests);

console.log("Hi i just found a bigger dinner table");

guests.unshift("Abdullah");
guests.splice(guests.length / 2, 0, "Sami");
append(guests, "Adil");
inviteGuests(guests);

console.log("Hi i can invite only two people for dinner");

removeGuests(guests);
inviteGuests(guests);
guests.splice(0);
console.log(guests);
