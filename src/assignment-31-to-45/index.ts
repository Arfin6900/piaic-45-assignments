import inquirer from "inquirer";
import { printColoredMessage } from "../../constants/colors.js";

export const assingment31 = (): void => {
  printColoredMessage(
    "Question: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.\nIf the list is empty, print the message 'We need to find some users!'\nRemove all of the usernames from your array, and make sure the correct message is printed."
  );

  let users: string[] = ["Alice", "Bob", "Charlie", "David"];

  if (users.length === 0) {
    console.log("We need to find some users!");
    return;
  }

  users = []; // Removing all usernames

  console.log("All usernames have been removed.");
};

// assingment 32
export const assingment32 = (): void => {
  printColoredMessage(
    "Question: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.\nMake a list of five or more usernames called current_users.\nMake another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.\nLoop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.\nMake sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted."
  );

  let current_users: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];
  let new_users: string[] = ["Frank", "Alice", "Grace", "John", "Eve"];

  for (let new_user of new_users) {
    if (current_users.includes(new_user.toLowerCase())) {
      console.log(`The username "${new_user}" is not available.`);
    } else {
      console.log(`The username "${new_user}" is available.`);
    }
  }
};

// assingment 33
export const assingment33 = (): void => {
  printColoredMessage(
    "Question: Ordinal Numbers: Ordinal numbers indicate their position in an array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.\nStore the numbers 1 through 9 in an array.\nLoop through the array.\nUse an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read '1st 2nd 3rd 4th 5th 6th 7th 8th 9th', and each result should be on a separate line."
  );

  let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let number of numbers) {
    if (number === 1) {
      console.log(`${number}st`);
    } else if (number === 2) {
      console.log(`${number}nd`);
    } else if (number === 3) {
      console.log(`${number}rd`);
    } else {
      console.log(`${number}th`);
    }
  }
};

// assingment 34
export const assingment34 = (): void => {
  printColoredMessage(
    "Question: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in an array, and then use a for loop to print the name of each pizza.\nModify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like 'I like pepperoni pizza'.\nAdd a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as 'I really love pizza!'"
  );

  let pizzas: string[] = ["Pepperoni", "Margherita", "Hawaiian"];

  for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
  }

  console.log("I really love pizza!");
};

// assingment 35
export const assingment35 = (): void => {
  printColoredMessage(
    "Question: Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.\nModify your program to print a statement about each animal, such as 'A dog would make a great pet'.\nAdd a line at the end of your program stating what these animals have in common. You could print a sentence such as 'Any of these animals would make a great pet!'"
  );

  let animals: string[] = ["Dog", "Cat", "Rabbit"];

  for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
  }

  console.log("Any of these animals would make a great pet!");
};

// assingment 36
export const assingment36 = (): void => {
  printColoredMessage(
    "Question: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function."
  );

  const make_shirt = (size: string, message: string): void => {
    console.log(
      `A ${size} shirt will be printed with the message: "${message}".`
    );
  };

  make_shirt("Large", "I love TypeScript");
};

// assingment 37
export const assingment37 = (): void => {
  printColoredMessage(
    "Question: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads 'I love TypeScript'. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message."
  );

  const make_shirt = (
    size: string = "Large",
    message: string = "I love TypeScript"
  ): void => {
    console.log(
      `A ${size} shirt will be printed with the message: "${message}".`
    );
  };

  make_shirt();
  make_shirt("Medium");
  make_shirt("Small", "I love JavaScript");
};

// assingment 38
export const assingment38 = (): void => {
  printColoredMessage(
    "Question: Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as 'Karachi is in Pakistan'. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country."
  );

  const describe_city = (
    city: string,
    country: string = "Default Country"
  ): void => {
    console.log(`${city} is in ${country}.`);
  };

  describe_city("Karachi", "Pakistan");
};
// assingment 39
export const assingment39 = (): void => {
  printColoredMessage(
    "Question: City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this: 'Lahore, Pakistan'. Call your function with at least three city-country pairs, and print the value that’s returned."
  );

  const city_country = (city: string, country: string): string => {
    return `${city}, ${country}`;
  };

  console.log(city_country("Lahore", "Pakistan"));
  console.log(city_country("Paris", "France"));
  console.log(city_country("Sydney", "Australia"));
};

// assingment 40
export const assingment40 = (): void => {
  printColoredMessage(
    "Question: Album: Write a function called make_album() that builds an object describing a music album. The function should take in an artist name and an album title, and it should return an object containing these two pieces of information. Use the function to make three objects representing different albums. Print each return value to show that objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s object. Make at least one new function call that includes the number of tracks on an album."
  );

  const make_album = (
    artist: string,
    title: string,
    tracks?: number
  ): { artist: string; title: string; tracks?: number } => {
    let album = {
      artist: artist,
      title: title,
      tracks,
    };
    if (tracks) {
      album.tracks = tracks;
    }
    return album;
  };

  console.log(make_album("Artist1", "Album1"));
  console.log(make_album("Artist2", "Album2", 10));
  console.log(make_album("Artist3", "Album3", 12));
};

// assingment 41
export const assingment41 = (): void => {
  printColoredMessage(
    "Question: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads 'I love TypeScript'. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message."
  );

  const make_shirt = (
    size: string = "Large",
    message: string = "I love TypeScript"
  ): void => {
    console.log(
      `A ${size} shirt will be printed with the message: "${message}".`
    );
  };

  make_shirt();
  make_shirt("Medium");
  make_shirt("Small", "I love JavaScript");
};

// assingment 42
export const assingment42 = (): void => {
  printColoredMessage(
    "Question: Describe City: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as 'Karachi is in Pakistan'. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country."
  );

  const describe_city = (
    city: string,
    country: string = "Default Country"
  ): void => {
    console.log(`${city} is in ${country}.`);
  };

  describe_city("Karachi", "Pakistan");
  describe_city("Tokyo", "Japan");
  describe_city("New York", "USA");
};

// assingment 43
export const assingment43 = (): void => {
  printColoredMessage(
    "Question: Album with Tracks: Write a function called make_album() that builds an object describing a music album. The function should take in an artist name, an album title, and the number of tracks on the album. It should return an object containing these three pieces of information. Make at least one new function call that includes the number of tracks on an album."
  );

  const make_album = (
    artist: string,
    title: string,
    tracks: number
  ): { artist: string; title: string; tracks: number } => {
    let album = {
      artist: artist,
      title: title,
      tracks: tracks,
    };
    return album;
  };

  console.log(make_album("Artist1", "Album1", 8));
};
export const assingment44 = () => {
  printColoredMessage(
    "Question: Sandwiches: Write a function that accepts an array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time."
  );

  const sandwiches = (...toppings: string[]) => {
    console.log("Sandwich with the following toppings:");
    for (let topping of toppings) {
      console.log("- " + topping);
    }
  };

  sandwiches("Cheese", "Tomato", "Lettuce");
  sandwiches("Turkey", "Bacon", "Avocado", "Onion");
  sandwiches("Ham", "Swiss");
};

// assingment 45

interface CarProperties {
  manufacturer: string;
  model: string;
  options?: number;
  addMore?: boolean;
  [key: string]: any;
}

export const assingment45 = async () => {
  printColoredMessage(
    "Question: Cars\nWrite a function that stores information about a car in an object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the object that’s returned to make sure all the information was stored correctly."
  );

  const properties: CarProperties = await inquirer.prompt([
    {
      message: "Enter car manufacturer here:",
      type: "input",
      name: "manufacturer",
    },
    { 
      message: "Enter model name here:", 
      type: "input", 
      name: "model" 
    },
    {
      message: "Do you want to add more properties?",
      type: "confirm",
      name: "addMore",
    },
  ]);

  if (!properties.manufacturer || !properties.model) {
    printColoredMessage("Manufacturer and model are required.","red");
    assingment45();
    return;
  }

  let carObj: CarProperties = {
    manufacturer: properties.manufacturer,
    model: properties.model,
  };

  if (properties.addMore) {
    while (true){
      let numberOfNewProperties = await inquirer.prompt([
        {
          message: "How many properties do you want to add?",
          type: "number",
          name: "options",
        },
      ]);
      if ( numberOfNewProperties.options){
        carObj.addMore = true;
        carObj.options = numberOfNewProperties.options;
        break
      }else{
        printColoredMessage("enter valid Number","red")
        continue
      }
     
    }

  } else {
    carObj.addMore = false;
  }

  if (carObj.options) {
    for (let index = 0; index < carObj.options; index++) {
      while (true) {
        try {
          const el = await inquirer.prompt([
            {
              message: "Enter property name here:",
              type: "input",
              name: "key",
            },
            {
              message: "Enter value here:",
              type: "input",
              name: "value",
            },
          ]);

          if (!el.key || !el.value) {
            printColoredMessage("Enter a valid property name and value.","red");
            continue;
          } else {
            carObj[el.key] = el.value;
            break;
          }
        } catch (err) {
          console.log(err);
          continue;
        }
      }
    }

    delete carObj.options;
  }

  console.log("Car Object:", carObj);
};
