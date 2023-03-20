var mongoose = require('mongoose ')

var peopleSchema = mongoose.Schema({
    Nombres: {
        type: String,
        required: true
    },
    Apellidos: {
        type: String,
        required: true
    },
   
}, {collection: 'people ' })

var People = module.exports = mongoose.model("People", peopleSchema )

module.exports.get = function(callback, limit){
    People.find(callback).limit(limit)
}