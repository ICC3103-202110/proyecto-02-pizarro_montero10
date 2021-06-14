const {getTitle, getTable, getAction} = require('./view')
const {update} =  require('./update')

async function app(model){
    while (true){
        const title = getTitle()
        const table = getTable(model.cities)
        console.clear()
        console.log(title)
        table.printTable()

        
        const {action, name_city} = await getAction(model)

        const updatedModel = update(action, name_city, model)
        model = updatedModel
        
    }
}

module.exports = {
    app
}