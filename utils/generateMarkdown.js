// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `![license](#license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `this project use ${license} license`
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


  ${data.table}
  ## installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ## License
  ${data.license}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## questions
  ${data.questions}

`;
}
// function generateMarkdown(fileName, data) {
//   FileSystem.writeFile(`./${fileName.toLowerCase().split('').join('')}.md`, data, (err) =>{
//     if(err) {
//       console.log(err)
//     }
//     console.log('Your README has been generated');
//   })
// }

module.exports = generateMarkdown;
