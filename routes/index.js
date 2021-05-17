const express = require('express')
const router = express.Router();

// const 
const mainControllers = require('../controllers/controllers');
router.get('/', mainControllers);
router.get('/home', mainControllers.home);

console.log("Routes file loaded");
module.exports = router