function addCity(input, model){
    
}

function update(input, model){
    const {name_city} = model
    const {temp} = input
    const {max} = input
    const {Min} = input
    var {conversion} = 0
    return {
        ...model,
        new_leftvalue: conversion,
        new_leftunit:to,
        new_rightvalue: temp,
        new_rightunit: from,
    }
}