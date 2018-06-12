"use strict";
const GameConst = require('./game_const');
const Saves = {
	CLERIC: {			
		[GameConst.POISON]: 11,
		[GameConst.WAND]: 12,
		[GameConst.STONE]: 14,
		[GameConst.BREATH]: 16,
		[GameConst.SPELLS]: 15
	},
	FIGHTER: {			
		[GameConst.POISON]: 12,
		[GameConst.WAND]: 13,
		[GameConst.STONE]: 14,
		[GameConst.BREATH]: 15,
		[GameConst.SPELLS]: 16
	},
	MAGIC_USER: {			
		[GameConst.POISON]: 13,
		[GameConst.WAND]: 14,
		[GameConst.STONE]: 13,
		[GameConst.BREATH]: 16,
		[GameConst.SPELLS]: 15
	},
	THIEF: {			
		[GameConst.POISON]: 13,
		[GameConst.WAND]: 14,
		[GameConst.STONE]: 13,
		[GameConst.BREATH]: 16,
		[GameConst.SPELLS]: 15
	},			
	throws() {
		return {
			[GameConst.CLERIC]: Saves.CLERIC,
			[GameConst.FIGHTER]: Saves.FIGHTER,
			[GameConst.MAGIC_USER]: Saves.MAGIC_USER,
			[GameConst.THIEF]: Saves.THIEF
		}
	},
	saves(char_class) {
		return Saves.throws()[char_class];
	},
	
}

module.exports = Object.freeze(Saves);