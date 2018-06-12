"use strict";
const SavingThrows = require('../../lib/saving_throws');
const GameConst = require('../../lib/game_const');

describe('SavingThrows', () => {
	describe('obj constants', () => {
		it('Returns first level saving throws object for all classes', () => {
			//console.log(SavingThrows);
			let cleric = SavingThrows.CLERIC;
			let fighter = SavingThrows.FIGHTER;
			let mu = SavingThrows.MAGIC_USER;
			let thief = SavingThrows.THIEF;
			
			expect(cleric["POISON or DEATH RAY"]).toEqual(11);
			expect(fighter["MAGIC WAND"]).toEqual(13);
			expect(mu["TURN TO STONE or PARALYSIS"]).toEqual(13);
			expect(thief["DRAGON BREATH"]).toEqual(16);
			expect(cleric["SPELLS or MAGIC STAFF"]).toEqual(15);
		});
	});
	describe('.save(char_class)', () => {
		it('Returns first level saving throws object for given class', () => {
			let saves = SavingThrows.saves(GameConst.FIGHTER);
			expect(saves["POISON or DEATH RAY"]).toEqual(12);
			expect(saves["MAGIC WAND"]).toEqual(13);
			expect(saves["TURN TO STONE or PARALYSIS"]).toEqual(14);
			expect(saves["DRAGON BREATH"]).toEqual(15);
			expect(saves["SPELLS or MAGIC STAFF"]).toEqual(16);
		});
	});	
});  