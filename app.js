const Fs = require("fs");
const Os = require("os");
const Note = require("./notes.js"); // If there is no module.exports inside the file require launch directly the instructions inside him.

let user = Os.userInfo();
let res = Note.addNote();

console.log(`Hello mon nom est ${user.username} et j'ai ${Note.age}`);
console.log(res);
console.log(`the result is ${Note.addNumber(2,2)}`); // You can directly call your method of your object because remember module.exports export the data in an object here Note.
console.log(Note);

// Fs.appendFile("greeting.txt", `Hello ${user.username}`, error => { // function allows to create file
//     if (error) {
//         console.log("unable to write in this file there is an error");
//     }
// });