// TODO: Create a function that returns a license badge based on which license is passed in
const fs=require("fs")
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return fs.writeFile("README.md",`# ${data.username}

  # <${data.projectname}>

  ## Description
  
  Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
  ## <${data.intro}>

  - What was your motivation?
  - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
  - What problem does it solve?
  - What did you learn?
  
  ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation  ${data.installation} 
  
  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
  
  ## Respository  ${data.repo} 
  
  ## License 
  <(https://img.shields.io/badge/License-green.svg)${data.license}>
  ---
  
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges 
  [](https://img.shields.io/badge/License-${data.license}-green.svg)
  
  ## Tests
  ${data.runningtest} 

  Go the extra mile and write tests for your application. Then provide examples on how to run them here.;`, (error) => {
    if (error) {
      console.log(error)
    } else {
      console.log('Success')
    }
  }
)}
module.exports = generateMarkdown;