const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : { type : String, required : true },
    phone : { type : Number, required : true },
    group : String,
    email : String,
    company : String
});

module.exports = mongoose.model('Contact', contactSchema);