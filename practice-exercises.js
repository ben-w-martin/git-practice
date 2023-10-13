console.log("Exercise 2");
let sample = "Hello Codeup";
console.log(sample.length); //Use .length to find the number of characters in the string.
console.log(sample.toUpperCase()); // Try to make the sample string all upper or all lower case.
console.log(sample.toLowerCase());
sample = sample + "Students"; //Update the variable sample via concatenation so that it contains "Hello Codeup Students".
console.log(sample);
sample.replace("Students", "Class"); //Replace "Students" with "Class".
console.log(sample);
console.log(sample.indexOf("c")); //Find the index of "c" using .indexOf(). What do you observe?

console.log("Exercise 3a"); // You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
const LITTLE_MERMAID_DAYS = 3;
const BROTHER_BEAR_DAYS = 5;
const HERCULES_DAYS = 3;
const TOTAL_SPENT = (LITTLE_MERMAID_DAYS + BROTHER_BEAR_DAYS + HERCULES_DAYS) * 3;
console.log(TOTAL_SPENT);

console.log("Exercise 3b"); //Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
let googleRate = 400;
let amazonRate = 380;
let metaRate = 350;
let googleHours = 6;
let amazonHours = 4;
let metaHours = 10;
let totalPay = ((googleRate * googleHours) + (amazonRate * amazonHours) + (metaRate * metaHours));
console.log(totalPay);

console.log("Exercise 4");
let username = 'codeup';
let password = 'notastrongpassword';

let greaterThanFiveChar = password.length >= 5;
console.log("Password is greater than 5 Char: " + greaterThanFiveChar);
// function containsUsername(password) {
//     if ((password.indexOf(username)) == -1) {
//         return false;
//     } else {
//         return true;}
// }
//
// let notInclUsername = !(containsUsername(password));
let notInclUsername = password.indexOf(username) === -1;
// let notInclUsername = !password.includes(username);
let unCharLimit = (username.length <= 20);
console.log("Username: " + username);
console.log("Password: " + password);
console.log("Password does not include username: " + notInclUsername);
console.log("Username is no greater than 20 Char: " + unCharLimit);

let whiteSpace = password.trim() === password && username.trim() === username;
console.log("Username and Password contain no whitespace on front or end: " + whiteSpace);