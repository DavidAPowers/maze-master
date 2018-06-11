"use strict";
const AbilityScores = require('../../lib/ability_scores');

describe('AbilityScores', () => {
	describe('.highest(stats)', () => {
		it('Given a list of ability scores, returns highest ability', () => {
			let stats1 = { str: 14, int: 10, wis: 11, dex: 12, con: 15, cha: 10 };
			let stats2 = { str: 11, int: 11, wis: 8, dex: 13, con: 12, cha: 5 };
			let stats3 = { str: 10, int: 15, wis: 14, dex: 12, con: 4, cha: 8};
			let r1 = AbilityScores.highest(stats1);
			let r2 = AbilityScores.highest(stats2);
			let r3 = AbilityScores.highest(stats3);
			expect(r1).toEqual('con');
			expect(r2).toEqual('dex');
			expect(r3).toEqual('int');
		});
	});
});  