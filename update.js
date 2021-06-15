const axios = require('axios');

//key: e09385b1e29bdb7b60e31c485bb3f639
//api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid={API key}



function addCity(name_city, model){
    city = {name: name_city, temp:0, max:0, min:0}

    const temp_model = model

    temp_model.cities.push(city)
    temp_model.names.push(name_city)
    return temp_model    
}

function updateCity(name_city, model){
    
}

function deleteCity(name_city, model){
    
}


function update(action, name_city, model){
    if (action === 'Add City'){
        return addCity(name_city, model)
    }

    else if (action === 'Update City'){
        return updateCity(name_city, model)
    }

    else if (action === 'Delete City'){
        return deleteCity(name_city, model)
    }
}

module.exports = {
    update
}