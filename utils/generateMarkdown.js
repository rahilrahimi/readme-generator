// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![license](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)`
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'BSD') {
    return `!(https://opensource.org/licenses/BSD-2-Clause)`
  }
  if (license === 'MIT') {
    return `!(https://opensource.org/licenses/MIT)`
  }
  if (license === 'none') {
    return `!(udifinded)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `generator license`
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${renderLicenseBadge`data.license`} ${data.title} 
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
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## questions
  Contact me:
  Visit my Github at ${data.github}.
  If You have Questions? Email me at ${data.email}

`;
}

module.exports = generateMarkdown;
9