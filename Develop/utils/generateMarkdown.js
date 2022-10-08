// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)] \n' 
  }
  if (license == 'Apache'){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)] \n' 
  }
  if (license == 'None'){
    return '' 
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let prefix = ' License, Here is the link for more details: ' 
  if (license == 'MIT'){
    return license+prefix+'https://opensource.org/licenses/MIT' 
  }
  if (license == 'Apache'){
    return license+prefix+'https://opensource.org/licenses/Apache-2.0' 
  }
  if (license == 'None'){
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None') {
    return ''
  } else{
    return '## License'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ${renderLicenseBadge(data.license)}
## Description 
${data.description}
## Table of Contents
[Installation](#installation)
[Usage](#usage)
[Credits](#credits)
[License](#license)
[Contribution](#contribution)
[Tests](#tests)
[Questions](#questions)
${data.installation}
## Usage
${data.usage}
## Credits
${data.credits}
## License
${data.license}
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
## Contribute 
${data.contribution}
## Testing 
${data.tests}
## Questions 
Contact me at ${data.email} for any questions
check out my Github: https://github.com/${data.Username}
`;
};

module.exports = generateMarkdown;
