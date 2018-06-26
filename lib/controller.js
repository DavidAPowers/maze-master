const Dice = require('./dice');

module.exports = {
  roll3d6: function(req, res, next) {
  	let roll = Dice.roll('3d6');
  	res.send(roll);
  }
};