#! /usr/bin/env node 
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        message: "Enter the first number:", type: "number", name: "firstnumber"
    }, {
        message: "Enter the second number", type: "number", name: "secondnumber"
    }, {
        message: "select one of the operators to perform operation", type: "list", name: "Operator", choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },]);
//CONDITIONAL STATEMENT
if (answer.Operator == "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.Operator == "Substraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.Operator == "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.Operator == "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("please select valid operator");
}
