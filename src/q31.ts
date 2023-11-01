export {};

// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let current_users: string[] = ["osama", "ali", "nawaz", "shahbaz", "imran"];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users: string[] = ["osama", "ali", "arshad", "abdul", "albert"];

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

for (let user of new_users){
    if(current_users.includes(user.toLowerCase())){
        console.log("person will need to enter a new username");
        break;
    }
    else {
        console.log("Username is avalible.");
        break;
    }
}

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.