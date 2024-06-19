const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const HomeController = require('../controllers/HomeController');


router.get('/', HomeController.index);
router.get('/todos', todoController.index);
router.post('/todos', todoController.create);

module.exports = router;
