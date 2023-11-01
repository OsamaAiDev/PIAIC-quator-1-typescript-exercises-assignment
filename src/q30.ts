export {};

// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.
let users: string[] = ["admin", "editor", "writer", "designer"];
users.splice(0);
if(users.length <= 0){
    console.log("We need to find some users!");
}

for (let user of users){
    // console.log("hello");
if(user === "admin"){
    console.log("Hello admin, would you like to see a status report?");
    break;
}
    else {
        console.log(`Hello ${user}, thank you for logging in again.`);
    break;
    }
}