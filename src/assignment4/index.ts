import inquirer from "inquirer";

// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.



export const assingment4 = async () => {
    let personNameWithWhitespace = "\t\n   John Doe   \t\n";
    
    // Print the name with whitespace
    console.log("Name with whitespace:");
    console.log(personNameWithWhitespace);
    
    // Strip whitespace from the name
    let strippedName = personNameWithWhitespace.trim();
    
    // Print the stripped name
    console.log("\nStripped name:");
    console.log(strippedName);
    
    };