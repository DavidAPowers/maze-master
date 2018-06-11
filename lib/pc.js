const AbilityScores = require('./ability_scores');
const Dice = require('./dice');

class Pc {
	static get FIGHTER() {return "Fighter";}
	static get THIEF() {return "Thief";}
	static get CLERIC() {return "Cleric";}
	static get MAGIC_USER() {return "Magic User";}
	static get PRIME_REQS() {
		return {
			[Pc.FIGHTER]: "str",
			[Pc.THIEF]: "dex",
			[Pc.CLERIC]: "wis",
			[Pc.MAGIC_USER]: "int"
		}
	}
	static get HIT_POINTS() {
		return {
			[Pc.FIGHTER]: "d8",
			[Pc.THIEF]: "d6",
			[Pc.CLERIC]: "d6",
			[Pc.MAGIC_USER]: "d4"
		}
	}	
	static genCharClass(char_class) {
		let scores = Pc.rollStats();
		//if 

	}
	static pickCharClass(scores) {
		let highest = AbilityScores.highest(scores);
		let primes = Pc.PRIME_REQS;
		let char_class = false;
		for(let key in primes) {
			if(primes[key] === highest) {
				char_class = key;
			}
		}
		if(!char_class) {
			char_class = Pc.randomClass();
		}
		return char_class;
	}
	static randomClass() {
		let roll = Dice.roll('1d8');
		if(roll===1) {return Pc.MAGIC_USER;}
		else if(roll<4) {return Pc.CLERIC;}
		else if(roll<6) {return Pc.THIEF;}
		else {return Pc.FIGHTER;}
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

module.exports = Pc;