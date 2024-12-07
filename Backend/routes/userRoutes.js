const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserByid);
router.post('/users', userController.createUser);
router.delete('/users/:id', userController.DeleteUser);
router.put('/users/:id', userController.updateUser);


module.exports = router;