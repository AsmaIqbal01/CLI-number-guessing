#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number
// 2) user input for guessing number
// 3) compare user input with computer generated number and show result 
const randomNumber = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10:",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congratulations! You Guessed Right,Random number is:", randomNumber);
}
else {
    console.log("You Guessed wrong, the right number is:", randomNumber);
}
