const express = require('express');
const router = express.Router();
const controller require('../../lib/controller');


/* GET home page. */
router.get('/', function(req, res, next) {
  controller.roll3d6(req,res,next)
});

module.exports = router;
