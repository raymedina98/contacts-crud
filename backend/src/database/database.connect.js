const mongoose = require('mongoose');

//const URI = 'mongodb://localhost:27017/contacts';
const URI = 'mongodb+srv://colektia:colektiadb123@contacts-isj6r.mongodb.net/contacts?retryWrites=true&w=majority';

mongoose.connect(URI, { useFindAndModify: false, useNewUrlParser: true  })
    .then( db => {
        console.log('Connection succesfully established with the database')
    })
    .catch( err => {
        console.log(err);
    });

module.exports = mongoose;