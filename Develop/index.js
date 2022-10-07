// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdownGen = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    massage: "What is the project title?",
    name: "Title",
  },{
    type: "input",
    message: "Provide a detailed description of your project",
    name: "Description",
  },{
    type: "input",
    message: "Table of Contents",
    name: "Table of Contents",
  },{
    type: "input",
    message: "Provide installation instruction for the user, if any",
    name: "Installation",
  },{
    type: "input",
    message: "Provide examples and instructions for use",
    name: "Usage",
  },{
    type: "input",
    message: "What license's are being used?",
    options: [
      "MIT License",
      "Apache License 2.0",
      "GNU General Public License",
      "None",
    ],
    name: "License",
  },{
    type: "input",
    message: "Contributors of this project",
    name: "Contribution guideline",
  },{
    type: "input",
    message: "What commands are needed to test this application?",
    name: "Test",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (error) {
    if (err) {
      return console.log(error);
    } else {
      console.log("success");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function(data) {
    writeToFile("README.md", markdownGen(data));
  });
}

// Function call to initialize app
init();
