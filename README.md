# Professional README Generator Starter Code

[How to create a Professional README](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)


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