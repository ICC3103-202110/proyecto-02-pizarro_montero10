const {getTitle, getTable, getAction} = require('./view')
const {update} =  require('./update')
const axios = require('axios');

async function api(location){
    const key = 'e09385b1e29bdb7b60e31c485bb3f639'
    axios
    .get(`api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`)
    .then(response => {
        // Assign vars to response data
        const temperature = response.data.main.temp;

        console.log(response)
    }).catch(error => console.log("Error", error));
}

async function app(model){
    while (true){
        const title = getTitle()
        const table = getTable(model.cities)
        console.clear()
        console.log(title)
        table.printTable()

        await api('Santiago')
        const {action, name_city} = await getAction(model)

        const updatedModel = update(action, name_city, model)
        model = updatedModel
        
    }
}

module.exports = {
    app
}