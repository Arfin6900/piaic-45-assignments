import inquirer from "inquirer";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
export const assingment2 = async () => {
    let answer = await inquirer.prompt([{ message: "Enter your name here :", type: "input", name: 'Name' }]);
    console.log(`lowerCase ${answer.Name.toLocaleLowerCase()}`);
    console.log(`UpperCase ${answer.Name.toLocaleUpperCase()}`);
    console.log(`TitleCase ${answer.Name.at(0)?.toLocaleUpperCase()}${answer.Name.slice(1, answer.Name.length)}`);
};
