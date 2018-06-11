const AbilityScores = require('./ability_scores');
const SavingThrows = require('./saving_throws');
const Dice = require('./dice');

class Pc {
	static get STATLIST() {return ['str','int','wis','dex','con','cha']}
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
			[Pc.FIGHTER]: "1d8",
			[Pc.THIEF]: "1d6",
			[Pc.CLERIC]: "1d6",
			[Pc.MAGIC_USER]: "1d4"
		}
	}	
	static pregen() {
		let scores = Pc.rollStats(Pc.STATLIST,'3d6');
		let char_class = Pc.pickCharClass(scores);
		let hp = Pc.rollHp(char_class);
		let saves = SavingThrows.saves(char_class);
		let gold = Pc.rollStats('gold','10d6');
 		return	Object.assign({char_class: char_class}, {ability_scores: scores}, hp, saves, gold);
	}
	static rollHp(char_class) {
		let hp = Pc.HIT_POINTS;
		let dice = hp[char_class];
		return Pc.rollStats('hp',dice);
	}
	static pickCharClass(scores) {
		let highest = AbilityScores.highestPrime(scores);
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