#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Guess a number between 1-10: ",
    },
]);
if (answer.userGuessedNumber == randomNumber) {
    console.log("Congratulations! you guessed the right number.");
}
else {
    console.log("Try again! You guessed the wrong number.");
}
