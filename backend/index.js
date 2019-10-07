const express = require('express');
const cors = require('cors');
const app = express();
const contacts = require('./src/routes/contacts.routes');
const { mongoose } = require('./src/database/database.connect');

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended : false }));
app.use('/api/contacts', contacts);

// Handle production pages
if(process.env.NODE_ENV == 'production'){
    
    app.use(express.static(__dirname + '/public/'))

    // Handle SPA
    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname + '/public/index.html')
    });
}


// Handling errors 
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({
        error : 'Something wrong on the server'
    });
});

// Start the server
app.listen(PORT, () => console.log(`Server start on port ${PORT}`));

