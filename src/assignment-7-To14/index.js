import inquirer from "inquirer";
import { printColoredMessage } from "../../constants/colors.js";
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
export const assingment7 = async () => {
    const favoriteNumber = await inquirer.prompt([{ message: "Enter your favorite number here :", type: "number", name: 'number' }]);
    if (favoriteNumber.number) {
        console.log(`My favorite number is ${favoriteNumber.number}.`);
    }
    else {
        console.log(`Please Enter Valid Number`);
    }
    while (!favoriteNumber.number) {
        assingment7();
        break;
    }
};
export const assingment8 = () => {
    console.log("Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.");
    console.log(5 + 3);
    console.log(10 - 2);
    console.log(4 * 2);
    console.log(16 / 2);
};
// Names: Store the names of a few of your friends in an array and print each person’s name by accessing each element in the list, one at a time.
export const assingment9 = () => {
    printColoredMessage("Question: Names: Store the names of a few of your friends in an array and print each person’s name by accessing each element in the list, one at a time.");
    const friends = ['Saqib', 'Shahrukh', 'Zubair'];
    for (const friend of friends) {
        console.log(friend);
    }
};
// Greetings: Print a personalized message to each person in an array.
export const assingment10 = () => {
    printColoredMessage("Question:  Print a personalized message to each person in an array.");
    const friends = ['Saqib', 'Shahrukh', 'Zubair'];
    const message = "Hello, would you like to join me for dinner?";
    for (const friend of friends) {
        console.log(`${friend}, ${message}`);
    }
};
export const assingment11 = () => {
    printColoredMessage("Question: Your Own Array: Print a series of statements about items in an array.");
    const transportation = ['lamborgini', 'harley devidson', 'F16'];
    for (const item of transportation) {
        console.log(`I would like to own a ${item}.`);
    }
};
// Guest List: Print an invitation message to each person in an array.
export const assingment12 = () => {
    printColoredMessage("Question: Guest List: Print an invitation message to each person in an array.");
    const guests = ['John', 'Saqib', 'Shahrukh'];
    for (const guest of guests) {
        console.log(`Dear ${guest}, You are invited to dinner.`);
    }
};
// Changing Guest List: Replace a guest and print a new set of invitation messages.
export const assingment13 = () => {
    printColoredMessage("Question: Changing Guest List: Replace a guest and print a new set of invitation messages.");
    const guests = ['Hammad', 'Saqib', 'Shahrukh'];
    console.log("Unfortunately, Shahrukh can't make it to dinner.");
    guests[2] = 'Zubair';
    for (const guest of guests) {
        console.log(`Dear ${guest}, You are invited to dinner.`);
    }
};
// More Guests: Add more guests and print a new set of invitation messages.
export const assingment14 = () => {
    printColoredMessage("Question: More Guests: Add more guests and print a new set of invitation messages.");
    const guests = ['Hammad', 'Saqib', 'Shahrukh'];
    console.log("Good news! We have a bigger dinner table now.");
    guests.unshift('Sufiyan');
    guests.splice(2, 0, 'Zubair');
    guests.push('Hammaz');
    for (const guest of guests) {
        console.log(`Dear ${guest}, You are invited to dinner.`);
    }
};
