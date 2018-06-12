"use strict";
const GameConst = require('../../lib/game_const');

describe('GameConst', () => {
	describe('.STATLIST', () => {
		it('returns statlist array', () => {
			let a = GameConst.STATLIST;
			expect(a).toEqual([ 'str', 'int', 'wis', 'dex', 'con', 'cha' ]);
		});
	});
	describe('.save(char_class)', () => {
		it('Returns first level saving throws object for given class', () => {
			let classes = [GameConst.CLERIC,GameConst.FIGHTER,GameConst.MAGIC_USER,GameConst.THIEF];
			let throws = [GameConst.POISON,GameConst.WAND,GameConst.STONE,GameConst.BREATH,GameConst.SPELLS]
			classes.forEach((el) => expect(!el).toEqual(false));
			throws.forEach((el) => expect(!el).toEqual(false));
		});
	});	
});  