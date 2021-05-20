const express = require('express')
const router = express.Router();

// const 
const mainControllers = require('../controllers/controllers');
router.get('/', mainControllers);
// router.get('/home', mainControllers.home);

router.post('/create-task', mainControllers.createData);
router.get('/delete-task', mainControllers.deleteData);
router.get('/delete-all', mainControllers.deleteAll);


console.log("Routes file loaded");
module.exports = router