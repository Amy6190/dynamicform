const mongoose = require('mongoose');

const Form = new mongoose.Schema({
    name : {type : String},
    value : {type : String},
    description : {type : String},
    form_id : {type : String},
})

module.exports = mongoose.model('Form',Form)