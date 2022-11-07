// TODO: Create a function that returns a license badge based on which license is passed in
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
  return `# ${data.title} 
 
    ## Description
    ${data.description}
    
    ## Table of Contents
      * [Installation](#installation)
      * [Usage](#usage)
      * [Contributing](#contributing)
      * [Questions](#questions)
      * [License](#license)
  
    ## Installation 
    ${data.install}

    ## Usage
    ${data.usage}

    ## Contributing
    ${data.contributors}

    ## Questions
    Any questions about this application, please contact me at ${data.email}. 

    ## License
    This application is released under the ${data.license} license.
`;
}

module.exports = generateMarkdown;
