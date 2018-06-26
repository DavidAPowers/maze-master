const Pc = require('./pc');
const Dice = require('./dice');

module.exports = {
  roll3d6: function(req, res, next) {
  	res.send(String(Dice.roll('3d6')));
  },
  roll: function(req, res, next) {
  	res.send(String(Dice.roll(req.params.dice)));
  },  
  pregen: function(req, res, next) {
  	res.send(JSON.stringify(Pc.pregen()));
  },  
};