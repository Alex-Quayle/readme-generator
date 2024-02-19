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
        message: 'Please enter a description of your project',
        name: 'desc',
      },
      {
        type: 'input',
        message: 'Please provide installation instructions for the project',
        name: 'install',
      },
      {
        type: 'input',
        message: 'Please provide usage instructions for the project',
        name: 'usage',
      },
      {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'contact',
        choices: ['email', 'phone', 'telekinesis'],
      },
      {
        type: 'input',
        message: 'Please provide a name of a contributor',
        name: 'contributor',
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
}

// function to initialize program
function init() {
}

// function call to initialize program
init();

// ADD MARKDOWN