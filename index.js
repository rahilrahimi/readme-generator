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
  type: "input",
  message: "what's the license name :"
},
{
  name: "contributing",
  type: "input",
  message: "enter if you have any contributing name:"
},
{
  name: "tests",
  type: "input",
  message: "provide examples of tests:"
},
{
  name: "questions",
  type: "input",
  message: "link to your GitHub profile, and enter your email address instructions on how to reach you: "
}];


// TODO: Create a function to write README file
function writeFile(fileName, data) {
  let markdownfile = generateMarkdown(answers);
 return fs.writeToFileSync("README_final.md", markdownfile, (error) => error? console.log(error): console.log("writen file"))
 }

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers)
      console.log(answers.title)
      writeFile("README_final.md", markdownfile, (error) => error? console.log(error): console.log("writen file"));
      //call function to creat markdown file and give answers as a parameter
      // let markdownfile = generateMarkdown(answers);
      // fs.writeToFile("README_final.md", markdownfile, (error) => error? console.log(error): console.log("writen file"))
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
