import inquirer from "inquirer";
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
export const assingment1 = async () => {
    let answer = await inquirer.prompt([{ message: "Enter your name here :", type: "input", name: 'Name' }]);
    console.log(`Hello ${answer.Name}, would you like to learn some Python today?`);
};
