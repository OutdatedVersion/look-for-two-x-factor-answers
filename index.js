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


/**
 * Take in the two numbers and factor out the required solutions for it. In the event
 * that there is no actual solution, text will be returned stating so.
 * 
 * @param {Number} add The number that the two numbers must add up to
 * @param {Number} product The number that the two numbers must multiply to
 * @returns {String} The answer or text stating we couldn't find an answer
 */
const solve = (add, product) => 
{
    const insideRoot = add * add - 4 * product

    if (insideRoot >= 0)
    {
        const b = Math.round((add + Math.sqrt(insideRoot)) / 2)
        const a = Math.round(add - b)

        return `Use ${a} and ${b}`
    }
    else return 'No real solution'
}