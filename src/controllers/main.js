const path = require('path');

const mainController = {

    home: function (req, res) {
        res.render('home');
    },

    about: function (req, res) {
        res.render('about');
    },

    contact: function (req, res) {
        res.render('contact');
    } ,
    
    events: function (req, res) {
        res.render('events');
    },
    
    join: function (req, res) {
        res.render('join');
    }

}

module.exports = mainController