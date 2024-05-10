#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.cyanBright(`\n \t\t WELCOME TO WORD COUNTER`));
let cond = true;
while (cond) {
    console.log(`${"=".repeat(60)}\n `);
    let ans = await inquirer.prompt([
        {
            name: "sentence",
            type: "input",
            message: "Enter a Sentence : "
        }
    ]);
    let word = ans.sentence.trim().split(" ");
    console.log(`\n ${"=".repeat(60)}\n `);
    console.log(chalk.bold(" - Sentence Words : "));
    console.log(word);
    console.log(chalk.bold(`\n - Word Count : ${chalk.bold.redBright(word.length)}`));
    console.log(`\n ${"=".repeat(60)}\n `);
    let con = await inquirer.prompt([
        {
            name: "check",
            type: "confirm",
            message: "Do you want do more : ",
            default: false
        }
    ]);
    cond = con.check;
}
