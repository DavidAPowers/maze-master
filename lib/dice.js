const Dice = {
	rollOne(sides) {
		return (Math.floor(Math.random()*sides) + 1);		
	},
	rollDice(n,sides) {
		if(sides===0 || n < 1) {return 0;}
		else if(sides===1) {return 1;}
		else if(n===1) {return Dice.rollOne(sides);}
		else {
			return (Dice.rollDice(n-1,sides) + Dice.rollOne(sides));
		}
	},
	validFormat(dice) {
		return /\d+d\d+/.test(dice);
	},
	roll(dice) {
		if(!Dice.validFormat(dice)) {return 0;}
		let arr = dice.split('d');
		return Dice.rollDice(arr[0],arr[1]);		
	},
};
module.exports = Object.freeze(Dice);