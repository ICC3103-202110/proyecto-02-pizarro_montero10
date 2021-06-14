const axios = require('axios');

function api(location){
  
}


function addCity(name_city, model){
    city = {name: name_city, temp:0, max:0, min:0}
    model.push(city)
    return model    
}

function updateCity(name_city, model){
    
}

function deleteCity(name_city, model){
    
}


function update(input, name_city, model){
    
    const {name_city} = model
    const {temp} = input
    const {max} = input
    const {min} = input
    
    if (input === 'Add City'){
        addCity(name_city, model)
    }

    else if (input === 'Update City'){
        updateCity(name_city, model)
    }

    else if (input === 'Delete City'){
        deleteCity(name_city, model)
    }
    return {
        ...model,
        
    }
}