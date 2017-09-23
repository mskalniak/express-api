var mongoose = require('mongoose');
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../config.js');

exports.addUser = function(req, res) {
    var userInstance = new User({name: 'Chris', password:'12321'});

      userInstance.save(function (err, object) {
        if (err) return console.error(err);
        console.log('success!');
        res.send(object);
      }); 
};

exports.getInfo = function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });  
};

exports.getUsers = function(req, res) {
    User.find({}, function(err, users) {
        res.json(users);
      });
};