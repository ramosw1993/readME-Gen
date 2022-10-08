// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    massage: "What is the project title?",
    name: "title",
  },{
    type: "input",
    message: "Provide a detailed description of your project",
    name: "description",
  },{
    type: "input",
    message: "Provide installation instruction for the user, if any",
    name: "installation",
  },{
    type: "input",
    message: "Provide examples and instructions for project usage",
    name: "usage",
  },{
    type: "input",
    message: "Credits for this project",
    name: "credits",
  },{
    type: "list",
    message: "Please choose an option for a license",
    choices: [
      `MIT License`,
      `Apache License 2.0`,
      `None`,
    ],
    name: "license",
  },{
    type: "input",
    message: "Contributors of this project",
    name: "contribution",
  },{
    type: "input",
    message: "Enter tests?",
    name: "tests",
  },{
      type: 'input',
      message: "What is your email?",
      name: 'email',
  },{
        type: 'input',
        message: "What is your username?",
        name: 'username',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(error) {
    console.log(data);
    if (error) {
      return console.log(error);
    } else {
      console.log("success");
    }
  });
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt([...questions]).then(function(data) {
    console.log(data);
    writeToFile("./ReadMe.md", generateMarkdown(data))
  });
};

// Function call to initialize app
init();
