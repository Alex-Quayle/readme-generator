const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your README',
      },
      {
        type: 'input',
        name: 'desc',
        message: 'Please enter a description of your project',
      },
      {
        type: 'input',
        name: 'install',
        message: 'Please provide installation instructions for the project',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage instructions for the project',
      },
      {
        type: 'input',
        name: 'contributor',
        message: 'Please provide a name of a contributor',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Please enter testing information',
      },
      {
        type: 'input',
        name: 'GitHub',
        message: 'Please enter your GitHub username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address',
      },
      {
        type: 'input',
        name: 'comms',
        message: 'Please enter communication details',
      }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          console.error(err);
        } else {
          console.log("Generated README");
        }})
}

// function to initialize program
function init() {
    inquirer.prompt(questions)  .then((answers) => {
        let responses = generateMarkdown(answers);
        writeToFile('result.md', responses);
    })
}

// function call to initialize program
init();