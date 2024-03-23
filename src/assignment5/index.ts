import inquirer from "inquirer";

// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

export const assingment5 = async () => {
    let famous_person:{Name:string} = await inquirer.prompt([{ message: "Enter Auther name here :", type: "input", name: 'famous_person' }]);
    let message:{quote:string} = await inquirer.prompt([{ message: "Enter Quote here :", type: "input", name: 'message' }]);
    console.log(`${famous_person} once said, “${message}”.`)
};


