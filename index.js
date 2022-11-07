// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter title of your project.'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project in a short paragraph.'
          },
          {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username.'
          },
          {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.'
          }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// console.log to confirm node runs on command line
// console.log("Hello Node!");