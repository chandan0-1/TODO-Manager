// importing required library for project
const express = require('express')
const router = express.Router();

// const 
const mainControllers = require('../controllers/controllers');
router.get('/', mainControllers);
// router.get('/home', mainControllers.home);


// creating Router to add Task
router.post('/create-task', mainControllers.createData);

// creating Router to Delete a Task

router.get('/delete-task', mainControllers.deleteData);

// creating Router to delete all avail Task
router.get('/delete-all', mainControllers.deleteAll);



console.log("Routes file loaded");
// Exporting this file so that I can access outside of parent Directory
module.exports = router