// TODO: Include packages needed for this application

// External packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Internal modules
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    message: "What is the title of your repo?",
    name: 'title',
    default: 'Project Title',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("A Title is required.");
        }
        return true;
    }
},

{
    type: 'input',
    message: "What is your GitHub username?",
    name: 'username',
    default: 'jessiemullins',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("A valid username is required.");
        }
        return true;
    }
},

{
    type: 'input',
    message: "What is your email address?",
    name: 'email',
    default: 'j.bene89@gmail.com',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("An email address is required.");
        }
        return true;
    }
},

{
    type: 'input',
    message: "Describe the steps required to install your project for the Installation section.",
    name: 'installation'
},

{
    type: 'input',
    message: "Describe the steps required to install your project for the Installation section.",
    name: 'installation'
},

{
    type: 'input',
    message: "Provide instructions and examples of your project in use for the Usage section.",
    name: 'usage'
},

{
    type: 'input',
    message: "If applicable, provide guidelines on how other developers can contribute to your project.",
    name: 'contributing'
},

{
    type: 'input',
    message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
    name: 'tests'
},

{
    type: 'list',
    message: "Choose a license for your project.",
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    name: 'license'
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}

const writeFileAsync = util.promisify(writeToFile);

async function init() {
    try {

        // Prompt Inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank you for your responses! Fetching your GitHub data next...");
    
        // // Call GitHub api for user info
        // const userInfo = await api.getUser(userResponses);
        // console.log("Your GitHub user info: ", userInfo);
    
        // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
        console.log("Generating your README next...")
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);
    
        // Write markdown to file
        await writeFileAsync('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

// TODO: Create a function to initialize app

init();
