const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.cyanBright(
        figlet.textSync(
            'Weather App',
            {
                horizontalLayout: 'full',
                font: 'digital',
                width: 80
            }
        )
    )
}

function getTable(model){
    
    const {name} = model
    const {temp} = model
    const {max} = model
    const {min} = model
    
    return [
        {
            'name': name,
            'temp': temp,
            'max': max,
            'min': min
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

function Action(action){
    if (action === 'Add City'){
        return inquirer.prompt([
            {
                type: 'Input',
                message: 'Location?',
                name: 'location',
            }
        ])
    }

    else if (action === 'Update City'){
        return 0
    }

    else if (action === 'Delete City'){
        return 0
    }
}