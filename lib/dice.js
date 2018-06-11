class Dice {
	static rollOne(sides) {
		return (Math.floor(Math.random()*sides) + 1);
	}
	static rollDice(n,sides) {
		let total = 0;
		for(let i=0; i<n; i++) {
			total += Dice.rollOne(sides);
		}
		return total;
	}
	static validFormat(dice) {
		return /\d+d\d+/.test(dice);
	}
	static roll(dice) {
		if(!Dice.validFormat(dice)) {return 0;}
		let arr = dice.split('d');
		return Dice.rollDice(arr[0],arr[1]);
	}


}

module.exports = Dice;