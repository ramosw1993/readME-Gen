// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenseBadge;
  if (license == `MIT License`){
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)] \n';
  }
  else if (license == `Apache License 2.0`){
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)] \n';
  }
  else {
    licenseBadge = "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let message = ' License, Here is the link: ' 
  if (license == `MIT License`){
    return license+message+'https://opensource.org/licenses/MIT' 
  }
  else if (license == `Apache License 2.0`){
    return license+message+'https://opensource.org/licenses/Apache-2.0' 
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseInfo = 'License: (' + renderLicenseBadge(license) + ')  ' + renderLicenseLink(license);
  return licenseInfo;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
${renderLicenseSection(data.license)} \n

# ${data.title} \n
## Description
${data.description} \n
## Table of Contents
[Installation](#installation)
[Usage](#usage)
[Credits](#credits)
[License](#license)
[Contribution](#contribution)
[Tests](#tests)
## Installation \n
${data.installation} \n
## Usage
${data.usage} \n
## Credits
${data.credits} \n
## License
${data.license} \n
## Contribute
${data.contribution} \n
## Testing
${data.tests} \n
## Questions
Contact me at ${data.email} for any questions and check out my Github: https://github.com/${data.Username}`;
};

module.exports = generateMarkdown;
