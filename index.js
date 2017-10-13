const Inquirer = require('inquirer')


// the questions used
let questions = [
    {
        type: 'input',
        name: 'add',
        message: 'These two numbers must add up to?'
    },
    {
        type: 'input',
        name: 'product',
        message: 'and their product will be..?'
    }
]


Inquirer.prompt(questions).then(answers => {
    console.log(
        solve(parseInt(answers.add), parseInt(answers.product))
    )
})