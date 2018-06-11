const AbilityScores = require('./ability_scores');
const SavingThrows = require('./saving_throws');
const Dice = require('./dice');
const CharClass = require('./char_class');

class Pc {
	static get STATLIST() {return ['str','int','wis','dex','con','cha']}
	static get PRIME_REQS() {
		return {
			[CharClass.FIGHTER]: "str",
			[CharClass.THIEF]: "dex",
			[CharClass.CLERIC]: "wis",
			[CharClass.MAGIC_USER]: "int"
		}
	}
	static get HIT_POINTS() {
		return {
			[CharClass.FIGHTER]: "1d8",
			[CharClass.THIEF]: "1d6",
			[CharClass.CLERIC]: "1d6",
			[CharClass.MAGIC_USER]: "1d4"
		}
	}	
	static pregen() {
		let scores = Pc.rollStats(Pc.STATLIST,'3d6');
		let char_class = Pc.pickCharClass(scores);
		let hp = Pc.rollHp(char_class);
		let saves = SavingThrows.saves(char_class);
		let gold = Pc.rollStats('gold','10d6');
 		return	Object.assign({char_class: char_class}, {ability_scores: scores}, hp, {saves: saves}, gold);
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
		if(roll===1) {return CharClass.MAGIC_USER;}
		else if(roll<4) {return CharClass.CLERIC;}
		else if(roll<6) {return CharClass.THIEF;}
		else {return CharClass.FIGHTER;}
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