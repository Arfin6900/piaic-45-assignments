import inquirer from "inquirer"
import { assingments } from "./constants/assignments.js"
// choices for list
const answer:{selectedAssignment:any}= await inquirer.prompt([{message:"Select Assingment ", type:"list", name:"selectedAssignment", choices:assingments.map(val => val.name)}])
let selectedAssignment =  assingments.find( val=>val.name == answer.selectedAssignment )
selectedAssignment?.function()

