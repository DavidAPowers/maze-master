"use strict";
const expect = require('chai').expect;
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
			
			expect(cleric["POISON or DEATH RAY"]).to.equal(11);
			expect(fighter["MAGIC WAND"]).to.equal(13);
			expect(mu["TURN TO STONE or PARALYSIS"]).to.equal(13);
			expect(thief["DRAGON BREATH"]).to.equal(16);
			expect(cleric["SPELLS or MAGIC STAFF"]).to.equal(15);
		});
	});
	describe('.save(char_class)', () => {
		it('Returns first level saving throws object for given class', () => {
			let saves = SavingThrows.saves(GameConst.FIGHTER);
			expect(saves["POISON or DEATH RAY"]).to.equal(12);
			expect(saves["MAGIC WAND"]).to.equal(13);
			expect(saves["TURN TO STONE or PARALYSIS"]).to.equal(14);
			expect(saves["DRAGON BREATH"]).to.equal(15);
			expect(saves["SPELLS or MAGIC STAFF"]).to.equal(16);
		});
	});	
});  