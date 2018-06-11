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
	static rollStats(stats,dice) {
		if(!Array.isArray(stats)) {
			stats = [stats];
		}
		let output = {};
		for (let i in stats) {
			output[stats[i]] = Dice.roll(dice);
		}
		return output;
	}

}

module.exports = Dice;