const fs = require('fs');
const path = require('path');
const filename = path.basename('./utils');
console.log(filename);
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
  name: "title",
  type: "input",
  message: "enter your project name: "
},
{
  name: "table",
  type: "input",
  message: "enter table of Contents (Optional)"
},
{
  name: "description",
  type: "input",
  message: "what's your Description: "
},
{
  name: "installation",
  type: "input",
  message: "What are the steps required to install your project? "
},
{
  name: "usage",
  type: "input",
  message: "Provide instructions and examples for use. Include screenshots as needed: "
},
{
  name: "credits",
  type: "input",
  message: "List your collaborators, third-party assets that require attribution, if any, with links to their GitHub profiles or If you followed tutorials, include links to those here:"
},
{
  name: "license",
  type: "list",
  message: "what's the license name :",
  choices: ["BSD", "MIT", "none"],
},
{
  name: "contributing",
  type: "input",
  message: "enter if you have any contributing name:",
},
{
  name: "tests",
  type: "input",
  message: "provide examples of tests:"
},
{
  name: "github",
  type: "input",
  message: "what is your GitHub profile: "
},
{
  name: "email",
  type: "input",
  message: "enter your email address: "
}];


// TODO: Create a function to write README file
function writeFile(fileName, data) {
  let markdownfile = generateMarkdown(data);
  return fs.writeFileSync(fileName, markdownfile, (error) => error ? console.log(error) : console.log("writen file"))
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers)
      console.log(answers.title)
      writeFile("./examreadme/README_final.md", answers);

      console.log("writen file")
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();
