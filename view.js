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
    const table = new Table()
    table.addRows(model)
    return table
}


function getAction(){
    return inquirer.prompt([
            {
                type: 'list',
                message: 'Select action:',
                name: 'action',
                choices: ['Add City', 'Update City', 'Delete City']

            }
        ])
}

function Action(action, model){
    const {name_city} = model 
    if (action === 'Add City'){
        return inquirer.prompt([
            {
                type: 'input',
                message: 'Location?',
                name: 'city',
            }
        ])
    }

    else if (action === 'Update City'){
        return inquirer.prompt([
            {
                type: 'list',
                message: 'Choose City:',
                name: 'city',
                choices: name_city,
            }
        ])
    }

    else if (action === 'Delete City'){
        return inquierer.prompt([
            {
                type: 'list',
                message: 'Choose City:',
                name: 'city',
                choices: name_city,


            }
        ])
    }
}

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

/*
const {printTable} = require('console-table-printer')
const {initModel} = require('./model')


action = getAction()
act = Action(action, initModel)
console.log(action)
*/

module.exports = {
    getTitle,
    getTable,
    getAction,
    Action,
    view
}

/*
console.log(getTitle())
printTable(getTable(initModel))
*/