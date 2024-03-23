import inquirer from "inquirer";

// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.


export const assingment3 = async () => {
    let autherName:{Name:string} = await inquirer.prompt([{ message: "Enter your name here :", type: "input", name: 'Name' }]);
    let quote:{quote:string} = await inquirer.prompt([{ message: "Enter your name here :", type: "input", name: 'quote' }]);
    console.log(`${autherName} once said, “${quote}”.`)
};



