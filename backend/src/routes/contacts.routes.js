const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/contacts.controller');


// GET / Read all contacts
router.get('/', ContactController.getAllContacts);

// GET / Read only one contact
router.get('/:contactId', ContactController.getContact);

// POST / Create a contact
router.post('/', ContactController.createContact);

//PUT / Update a contact
router.put('/:contactId', ContactController.updateContact);

// DELETE / Delete a contact
router.delete('/:contactId', ContactController.deleteContact);


module.exports = router;