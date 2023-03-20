var mongoose = require('mongoose ')
var people = require('./PeopleModel')

var project$Schema = mongoose.Schema({
    Titulo: {
        type: String,
        required: true
    },
    alumno: {
        type: people,
        required: true
    },
    creado: {
        type: Date,
        default: Date.now
    }
})