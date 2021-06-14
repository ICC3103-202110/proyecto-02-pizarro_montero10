const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
const {Table} = require('console-table-printer')

function getTitle(){
    return chalk.cyanBright(
        figlet.textSync(
            'Weather App',
            {
                horizontalLayout: 'full',
                font: 'digital'/*'Dancing Font'*/,
                width: 120
            }
        )
    )
}

function getTable(model){
    const table = new Table
    table.addRows(model)
    return table
}


function getAction(model){
    const{names} = model
    return inquirer.prompt([
            {
                type: 'list',
                message: 'Select action:',
                name: 'action',
                choices: ['Add City', 'Update City', 'Delete City']

            },
            {
                type: 'input',
                message: 'Location?',
                name: 'name_city',
                when: (answers) => answers.action === 'Add City'
            },
            {
                type: 'list',
                message: 'Choose City:',
                name: 'name_city',
                choices: names,
                when: (answers) => answers.action === 'Update City'
            },
            {
                type: 'list',
                message: 'Choose City:',
                name: 'name_city',
                choices: names,
                when: (answers) => answers.action === 'Delete City'
            }
        ])
}

module.exports = {
    getTitle,
    getTable,
    getAction
}