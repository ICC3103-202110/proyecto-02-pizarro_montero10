function addCity(name_city, model, data){
    const {temp, temp_max, temp_min} = data
    city = {name: name_city, temp:temp, max:temp_max, min:temp_min}

    const temp_model = model

    temp_model.cities.push(city)
    temp_model.names.push(name_city)
    return temp_model    
}

function updateCity(name_city, model, data){
    const temp_model = model

    return temp_model
}

function deleteCity(name_city, model, data){
    const temp_model = model

    return temp_model
}


function update(action, name_city, model, data){
    if (action === 'Add City'){
        return addCity(name_city, model, data)
    }

    else if (action === 'Update City'){
        return updateCity(name_city, model, data)
    }

    else if (action === 'Delete City'){
        return deleteCity(name_city, model, data)
    }
}

module.exports = {
    update
}