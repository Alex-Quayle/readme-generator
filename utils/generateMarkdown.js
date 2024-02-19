// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.desc}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.install}


  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributor}

  ## Tests
  ${data.test}

  ## Questions
  - GitHub: [${data.GitHub}](https://github.com/${data.GitHub})
  - Email: ${data.email}
  - Preferred Method of Communication: ${data.comms}
`;
}

module.exports = generateMarkdown;
