const Obj = require('./obj');
const SavingThrows = require('./saving_throws');
const Dice = require('./dice');
const GameConst = require('./game_const');
const Pc = {
	PRIME_REQS: {
		[GameConst.FIGHTER]: "str",
		[GameConst.THIEF]: "dex",
		[GameConst.CLERIC]: "wis",
		[GameConst.MAGIC_USER]: "int"
	},
	HIT_POINTS: {
		[GameConst.FIGHTER]: "1d8",
		[GameConst.THIEF]: "1d6",
		[GameConst.CLERIC]: "1d6",
		[GameConst.MAGIC_USER]: "1d4"
	},
	highestPrime(scores) {
		return Obj.maxPropName(Obj.subset(['str','dex','int','wis'], scores));
	},
	rollStats(stats,dice) {
		if(!Array.isArray(stats)) {
			stats = [stats];
		}
		let output = {};
		for (let i in stats) {
			output[stats[i]] = Dice.roll(dice);
		}
		return output;		
	},
	pregen() {
		let scores = Pc.rollStats(GameConst.STATLIST,'3d6');
		let char_class = Pc.pickCharClass(scores);
		let hp = Pc.rollHp(char_class);
		let saves = SavingThrows.saves(char_class);
		let gold = Dice.roll('3d6') * 10;
 		return	Object.assign({char_class: char_class}, {ability_scores: scores}, hp, {saves: saves}, {gold: gold});
	},
	rollHp(char_class) {
		let hp = Pc.HIT_POINTS;
		let dice = hp[char_class];
		return Pc.rollStats('hp',dice);		
	},
	pickCharClass(scores) {
		let highest = Pc.highestPrime(scores);
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
	},
	randomClass() {
		let roll = Dice.roll('1d8');
		if(roll===1) {return GameConst.MAGIC_USER;}
		else if(roll<4) {return GameConst.CLERIC;}
		else if(roll<6) {return GameConst.THIEF;}
		else {return GameConst.FIGHTER;}
	},

}
module.exports = Object.freeze(Pc);