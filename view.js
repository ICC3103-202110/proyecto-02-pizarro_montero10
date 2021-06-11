const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

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
    
    const {name_city} = model
    const {temp} = model
    const {max} = model
    const {min} = model
    
    return [
        {
            'Name': name_city,
            'Temp': temp,
            'Max': max,
            'Min': min
        }
    ]
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
                name: 'location',
            }
        ])
    }

    else if (action === 'Update City'){
        return inquirer.prompt([
            {
                type: 'list',
                message: 'Choose City:',
                name: 'update',
                choices: name_city,
            }
        ])
    }

    else if (action === 'Delete City'){
        return inquierer.prompt([
            {
                type: 'list',
                message: 'Choose City:',
                name: 'delete',
                choices: name_city,


            }
        ])
    }
}

const {printTable} = require('console-table-printer')
const {initModel} = require('./model')

/*
action = getAction()
act = Action(action, initModel)
console.log(action)
*/

module.exports = {
    getTitle,
    getTable,
    getAction,
    Action
}
console.log(getTitle())
printTable(getTable(initModel))