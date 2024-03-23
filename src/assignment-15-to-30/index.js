import inquirer from "inquirer";
import { printColoredMessage } from "../../constants/colors.js";
// Changing Guest List
export const assingment15 = async () => {
    printColoredMessage("Question: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.");
    let guests = ['Hammad', 'Saqib', 'Zubair', 'Shahrukh'];
    const cancelledGuest = guests.pop();
    console.log(`Unfortunately, ${cancelledGuest} can't make it to the dinner.`);
    const newGuest = await inquirer.prompt([{ message: "Enter New Guest Name Here :", type: "input", name: 'newGuest' }]);
    ;
    guests[2] = newGuest.newGuest;
    console.log("Updated invitation messages:");
    guests.forEach(guest => console.log(`Dear ${guest}, you're invited to the dinner.`));
};
// More Guests
export const assingment16 = () => {
    printColoredMessage("Question:More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.");
    let guests = ['Hammad', 'Saqib', 'Zubair', 'Shahrukh'];
    console.log("Good news! We found a bigger dinner table.");
    guests.unshift('Frank'); // Add one new guest to the beginning
    guests.splice(2, 0, 'Eve'); // Add one new guest to the specific index
    guests.push('Grace'); // Add one new guest to the end
    console.log("Updated invitation messages:");
    guests.forEach(guest => console.log(`Dear ${guest}, you're invited to the dinner.`));
};
// Shrinking Guest List
export const assingment17 = () => {
    printColoredMessage("Question:Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests");
    let guests = ['Hammad', 'Saqib', 'Zubair', 'Shahrukh'];
    console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people.");
    while (guests.length > 2) {
        const removedGuest = guests.pop();
        console.log(`Sorry ${removedGuest}, we can't invite you to the dinner.`);
    }
    guests.forEach(guest => console.log(`Dear ${guest}, you're still invited to the dinner.`));
    guests.length = 0; // Empty the list
    console.log("Empty list:", guests);
};
// Seeing the World
export const assingment18 = () => {
    printColoredMessage("Question:Seeing the World: Think of at least five places in the world you’d like to visit.");
    let places = ['Tokyo', 'Paris', 'New York', 'Machu Picchu', 'Sydney'];
    console.log("Original order:", places);
    console.log("Alphabetical order:");
    console.log([...places].sort());
    console.log("Original order:", places);
    console.log("Reverse alphabetical order:");
    console.log([...places].sort().reverse());
    console.log("Original order:", places);
    places.reverse();
    console.log("Reversed order:", places);
    places.reverse();
    console.log("Back to original order:", places);
    places.sort();
    console.log("Sorted in alphabetical order:", places);
    places.sort().reverse();
    console.log("Sorted in reverse alphabetical order:", places);
};
// Dinner Guests
export const assingment19 = () => {
    printColoredMessage("Question:Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.");
    let guests = ['Hammad', 'Saqib', 'Zubair', 'Shahrukh'];
    console.log(`Number of people invited to dinner: ${guests.length}`);
};
// Arrays of Things
export const assingment20 = () => {
    printColoredMessage("Question:Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.");
    let mountains = ['Everest', 'K2', 'Kangchenjunga', 'Lhotse', 'Makalu'];
    console.log("Mountains:", mountains);
};
// Conditional Tests
export const assingment21 = () => {
    printColoredMessage("Question:Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:");
    let car = 'subaru';
    console.log("Is car == 'subaru'? I predict True.");
    console.log(car == 'subaru');
    // More tests
    console.log("Is 5 > 3? I predict True.");
    console.log(5 > 3);
    console.log("Is 10 <= 20? I predict True.");
    console.log(10 <= 20);
    console.log("Is (5 > 3) && (10 <= 20)? I predict True.");
    console.log((5 > 3) && (10 <= 20));
    console.log("Is (5 > 10) || (10 <= 20)? I predict True.");
    console.log((5 > 10) || (10 <= 20));
    console.log("Is 'banana' in ['apple', 'banana', 'orange']? I predict True.");
    console.log(['apple', 'banana', 'orange'].includes('banana'));
    console.log("Is 'watermelon' not in ['apple', 'banana', 'orange']? I predict True.");
    console.log(!['apple', 'banana', 'orange'].includes('watermelon'));
};
// More Conditional Tests
export const assingment22 = () => {
    console.log("More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:");
    console.log("Equality and inequality with strings:");
    console.log("'apple' == 'apple':", 'apple' == 'apple');
    console.log("Lowercase function:");
    console.log("'apple'.toLowerCase() == 'apple':", 'apple'.toLowerCase() == 'apple');
    console.log("Numerical tests:");
    console.log("5 > 3:", 5 > 3);
    console.log("10 <= 20:", 10 <= 20);
    console.log("15 == 15:", 15 == 15);
    console.log("Tests using 'and' and 'or' operators:");
    console.log("(5 > 3) && (10 <= 20):", (5 > 3) && (10 <= 20));
    console.log("(5 > 10) || (10 <= 20):", (5 > 10) || (10 <= 20));
    console.log("Test whether an item is in an array:");
    console.log("'banana' in ['apple', 'banana', 'orange']:", 'banana' in ['apple', 'banana', 'orange']);
    console.log("Test whether an item is not in an array:");
    console.log("'watermelon' not in ['apple', 'banana', 'orange']:", 'watermelon' in ['apple', 'banana', 'orange']);
};
// Alien Colors #1
export const assingment23 = () => {
    console.log("Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.");
    const alienColor = 'green';
    if (alienColor === 'green') {
        console.log("The player just earned 5 points.");
    }
};
// Alien Colors #2
export const assingment24 = () => {
    console.log("Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.");
    const alienColor = 'green';
    if (alienColor === 'green') {
        console.log("The player just earned 5 points for shooting the alien.");
    }
    else {
        console.log("The player just earned 10 points.");
    }
};
// Alien Colors #3
export const assingment25 = () => {
    console.log("Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.");
    const alienColor = 'yellow';
    if (alienColor === 'green') {
        console.log("The player earned 5 points.");
    }
    else if (alienColor === 'yellow') {
        console.log("The player earned 10 points.");
    }
    else if (alienColor === 'red') {
        console.log("The player earned 15 points.");
    }
};
export const assingment26 = () => {
    let alienColor = "green";
    if (alienColor === "green") {
        console.log("You just earned 5 points for shooting the alien.");
    }
    else {
        console.log("You just earned 10 points.");
    }
};
export const assingment27 = () => {
    let alienColor = "red";
    if (alienColor === "green") {
        console.log("You just earned 5 points for shooting the alien.");
    }
    else {
        console.log("You just earned 10 points.");
    }
};
export const assingment28 = async () => {
    let alienColor = await inquirer.prompt([{ message: "Enter your favourite fruit name eg:banana,apple.orange etc:", type: "input", name: 'color' }]);
    ;
    ;
    if (alienColor.color === "green") {
        printColoredMessage("You earned 5 points.", "green");
    }
    else if (alienColor.color === "yellow") {
        printColoredMessage("You earned 10 points.", "green");
    }
    else if (alienColor.color === "red") {
        printColoredMessage("You earned 15 points", "green");
    }
    else {
        printColoredMessage("this color is not alien color", "red");
    }
};
export const assingment29 = async () => {
    const favoriteFruits = ["banana", "apple", "orange"];
    let favouritefruitname = await inquirer.prompt([{ message: "Enter your favourite fruit name eg:banana,apple,orange etc:", type: "input", name: 'name' }]);
    ;
    while (true) {
        if (favoriteFruits.includes(favouritefruitname.name.toLocaleLowerCase())) {
            printColoredMessage(`You really like ${favouritefruitname.name}s!`, 'green');
            break;
        }
        else {
            printColoredMessage(`Your favourite fruit ${favouritefruitname.name} is not in the list`, "yellow");
            assingment29();
            return;
        }
    }
};
export const assingment30 = async () => {
    console.log("Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:");
    const usernames = ["admin", "Eric", "Hammad", "Saqib", "John"];
    let userName = await inquirer.prompt([{ message: "Enter username :", type: "input", name: 'userName' }]);
    ;
    let isUserName = usernames.find(val => val == userName.userName);
    while (!userName.userName) {
        printColoredMessage("Please enter valid Name", "red");
        assingment30();
        break;
    }
    if (!userName.userName) {
        return;
    }
    if (isUserName == "admin") {
        printColoredMessage("Hello admin, would you like to see a status report?", "green");
    }
    else {
        printColoredMessage(`Hello ${isUserName}, thank you for logging in again`, "green");
    }
};
