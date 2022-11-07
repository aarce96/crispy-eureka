// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Enter title of your project.",
    },
    {
      type: "input",
      name: "description",
      message: "Please describe your project in a short paragraph.",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub username.",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address.",
    },
    {
      type: "input",
      name: "install",
      message: "Enter steps required to install your project.",
    },
    {
      type: "input",
      name: "usage",
      message: "Describe how to use this application.",
    },
    {
      type: "list",
      name: "license",
      message: "Enter any licenses used in this application.",
      choices: ["GNU", "MIT"],
      default: ["MIT"],
    },
    {
      type: "input",
      name: "contributors",
      message: "Enter any contributors used on this application.",
    },
  ]);
};

// TODO: Create a function to write README file
const writeFile = (data) => {
  fs.writeFile("README.md", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("README.md has been created successfully!");
    }
  });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// console.log to confirm node runs on command line
// console.log("Hello Node!");
