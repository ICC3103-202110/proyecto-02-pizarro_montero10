const {getTitle, getTable, getAction} = require('./view')
const {update} =  require('./update')
const axios = require('axios').default

function api(location){
    const key = 'e09385b1e29bdb7b60e31c485bb3f639'
    const r = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`)
    .then(response => {
        const main = response.data.main
        return main
    }).catch(error => console.log("Error"));
    return r
}

async function app(model){
    while (true){
        const title = getTitle()
        const table = getTable(model.cities)
        console.clear()
        console.log(title)
        table.printTable()

        const data = await api('Santiago')
        console.log(data)
        const {action, name_city} = await getAction(model)

        const updatedModel = update(action, name_city, model)
        model = updatedModel
        
    }
}

module.exports = {
    app
}