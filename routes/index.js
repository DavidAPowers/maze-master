const express = require('express');
const router = express.Router();
const Dice = require('../lib/dice');
const Controller = require('../lib/controller');


/* GET home page. */
router.get('/', function(req, res, next) {
  Controller.pregen(req,res,next);
});

module.exports = router;
