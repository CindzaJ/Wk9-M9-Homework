// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./utils/generateMarkdown.js')
// const generateREADME= ({username, email, projectname, intro, licence,installation,repo,contributionrepo,}) =>

// TODO: Create an array of questions for user input
    const questions = [
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub Username ',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
          type: 'input',
          name: 'projectname',
          message: 'What is your Project name?',
        },
        {
            type: 'input',
            name: 'intro',
            message: 'Please write a short Description of your Project',
        },
      {
          type: 'input',
          name: 'licence',
          message: 'What kind of license should your project have?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?'
      },
      {
        type: 'input',
        name: 'runningtest',
        message: 'what command should run to run tests?',
      },
      {
        type: 'input',
        name: 'repo',
        message: 'What does the user need to know about using the repo?',
      },
      {
        type: 'input',
        name: 'contributionrepo',
        message: 'What does the user need to know about contributing to the Repo?',
      },
    ];
    inquirer
    .prompt(questions)
    .then((answers)=>{
      console.log(answers)
      generateMarkdown(answers)
    })

// TODO: Create a function to write README file - // function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app - // function init() {}

// // Function call to initialize app - // init();
