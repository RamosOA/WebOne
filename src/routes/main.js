var express = require('express');
var router = express.Router();

var mainController = require('../controllers/main');

router.get('/', mainController.home);

router.get('/about', mainController.about);

router.get('/contact', mainController.contact);

router.get('/events', mainController.events);

router.get('/join', mainController.join);

module.exports = router;