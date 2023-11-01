export {};

// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

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


let guests: string[] = ["Rehman", "Shahnawaz", "Shahbaz", "Ehtisham", "Bilal"];

let guestRefusedToCome = ["Bilal", "Rehman"];

console.log(`Guests refuse to come on dinner are ${guestRefusedToCome}.`);

removeGuests(guestRefusedToCome, guests);
let newGuets: string[] = ["Arshad", "Ali"];

guests.splice(guests.length, 0, ...newGuets);

inviteGuests(guests);




