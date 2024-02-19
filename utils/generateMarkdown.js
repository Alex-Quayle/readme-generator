// function to generate markdown for README
function generateMarkdown(data) {
  let badge;
  switch (data.license) {
    case 'MIT':
      badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'Apache':
      badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'Attribution 4':
      badge = `[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)`;
      break;
  }

  return `# ${data.title}

  ## License
  ${badge}

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
