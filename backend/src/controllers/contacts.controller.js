const mongoose = require('mongoose');
const Contact = require('../models/contact');

const ContactController = {};

ContactController.getAllContacts = (req, res) => {
    
    // Read all database values
    Contact.find()
        .exec()
        .then( result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch( err => {
            console.log(err);
            res.status(500).json({
                error : err
            });
        });
}

ContactController.getContact = (req, res) => {
    const id = req.params.contactId;
    
    // Get a contact by id
    Contact.findById(id)
        .exec()
        .then( result => {
            console.log(result);
            //Check if the contact exist
            if(result){
                res.status(200).json(result);
            } else {
                res.status(404).json({
                    error : 'Not found any contact'
                });
            }
        })
        .catch( err => {
            console.log(err);
            res.status(500).json({
                error : err
            });
        });
}

ContactController.createContact = (req, res) => {

    // Get data from the body request and store into a new Contact object
    const contact = new Contact({
        _id : mongoose.Types.ObjectId(),
        name : req.body.name,
        phone : req.body.phone,
        group : req.body.group,
        email : req.body.email,
        company : req.body.company
    });

    // Insert the new Contact object in a database
    contact.save()
        .then( result => {
            console.log(result);
            res.status(201).json(result);
        })
        .catch( err => {
            console.log(err);
            res.status(500).json({
                error : err
            });
        });

}

ContactController.updateContact = (req, res) => {

    const id = req.params.contactId;

    // Get data from the body request and store into a new Contact object
    const contact = new Contact({
        _id : id,
        name : req.body.name,
        phone : req.body.phone,
        group : req.body.group,
        email : req.body.email,
        company : req.body.company
    });

    // Update a contact for the given id parameter
    Contact.findByIdAndUpdate(id, { $set : contact })
        .exec()
        .then( result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch( err => {
            console.log(err);
            res.status(500).json({
                error : err
            });
        });

}

ContactController.deleteContact = (req, res) => {

    const id = req.params.contactId;

    // Delete a contact for the given id parameter
    Contact.findByIdAndRemove(id)
        .exec()
        .then( result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch( err => {
            console.log(err);
            res.status(500).json({
                error : err
            });
        });

}

module.exports = ContactController;