"use strict";
const CharClass = require('./char_class');

class SavingThrows {
	static saves(char_class) {
		let saves = SavingThrows.THROWS;
		return saves[char_class];
	}
	static get POISON() {return "POISON or DEATH RAY";}
	static get WAND() {return "MAGIC WAND";}
	static get STONE() {return "TURN TO STONE or PARALYSIS";}
	static get BREATH() {return "DRAGON BREATH";}
	static get SPELLS() {return "SPELLS or MAGIC STAFF";}

	static get THROWS() {
		let saves = {
			[CharClass.CLERIC]: SavingThrows.CLERIC,
			[CharClass.FIGHTER]: SavingThrows.FIGHTER,
			[CharClass.MAGIC_USER]: SavingThrows.MAGIC_USER,
			[CharClass.THIEF]: SavingThrows.THIEF
		};
		return saves;
	}
	static get CLERIC() {
		return {			
			[SavingThrows.POISON]: 11,
			[SavingThrows.WAND]: 12,
			[SavingThrows.STONE]: 14,
			[SavingThrows.BREATH]: 16,
			[SavingThrows.SPELLS]: 15
		}
	}
	static get FIGHTER() {
		return {			
			[SavingThrows.POISON]: 12,
			[SavingThrows.WAND]: 13,
			[SavingThrows.STONE]: 14,
			[SavingThrows.BREATH]: 15,
			[SavingThrows.SPELLS]: 16
		}
	}
	static get MAGIC_USER() {
		return {			
			[SavingThrows.POISON]: 13,
			[SavingThrows.WAND]: 14,
			[SavingThrows.STONE]: 13,
			[SavingThrows.BREATH]: 16,
			[SavingThrows.SPELLS]: 15
		}
	}	
	static get THIEF() {
		return {			
			[SavingThrows.POISON]: 13,
			[SavingThrows.WAND]: 14,
			[SavingThrows.STONE]: 13,
			[SavingThrows.BREATH]: 16,
			[SavingThrows.SPELLS]: 15
		}
	}


}

module.exports = SavingThrows;