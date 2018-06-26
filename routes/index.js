const express = require('express');
const router = express.Router();
const Dice = require('../lib/dice');
const Controller = require('../lib/controller');


/* GET home page. */
router.get('/', Controller.pregen);
router.get('/roll', Controller.roll3d6);
router.get('/roll/:dice', Controller.roll);

module.exports = router;
