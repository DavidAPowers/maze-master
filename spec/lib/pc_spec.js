"use strict";
const Pc = require('../../lib/pc');

describe('Pc', () => {
	describe('.highest(stats)', () => {
		it('Given a list of ability scores, returns highest ability', () => {
			let stats1 = { str: 11, int: 11, wis: 8, dex: 13, con: 12, cha: 5 };
			let stats2 = { str: 10, int: 15, wis: 14, dex: 12, con: 4, cha: 8};
			let stats3 = { str: 10, int: 15, wis: 17, dex: 12, con: 4, cha: 8};
			let stats4 = { str: 16, int: 13, wis: 14, dex: 12, con: 4, cha: 8};
			let stats5 = { str: 14, int: 10, wis: 11, dex: 12, con: 15, cha: 10 };
			let c1 = Pc.pickCharClass(stats1);
			let c2 = Pc.pickCharClass(stats2);
			let c3 = Pc.pickCharClass(stats3);
			let c4 = Pc.pickCharClass(stats4);
			let c5 = Pc.pickCharClass(stats5);
			expect(c1).toEqual(Pc.THIEF);
			expect(c2).toEqual(Pc.MAGIC_USER);
			expect(c3).toEqual(Pc.CLERIC);
			expect(c4).toEqual(Pc.FIGHTER);
			expect(c5).toEqual(Pc.FIGHTER);
		});
	});
	describe('.rollStats(stats,dice)', () => {
		it('returns key, value pair where key is stat name and value is rondom generated value', () => {

			for(let i=0;i<10000;i++) {
				let stats = Pc.rollStats(['str','int','wis','dex','con','cha'],'3d6');
				expect(stats.str>2&&stats.str<19).toEqual(true);
				expect(stats.int>2&&stats.int<19).toEqual(true);
				expect(stats.wis>2&&stats.wis<19).toEqual(true);
				expect(stats.dex>2&&stats.dex<19).toEqual(true);
				expect(stats.con>2&&stats.con<19).toEqual(true);
				expect(stats.cha>2&&stats.cha<19).toEqual(true);				
			}
			//console.log(Pc.rollStats(['str','int','wis','dex','con','cha'],'3d6'));
			//given a string instead of an array, returns object with single named property
			let ok = Pc.rollStats('gold','2d6');
			expect(ok.gold>1&&ok.gold<13).toEqual(true);
			//given malformed dice string, returns value 0
			let bad = Pc.rollStats('bad','fdg');
			expect(bad.bad).toEqual(0);			


		});
	}); 
	describe('.rollHp(char_class)', () => {
		it('Given a list of ability scores, returns highest ability', () => {
			for(let i=0;i<10000;i++) {
				let hp = [Pc.rollHp(Pc.CLERIC),
					Pc.rollHp(Pc.FIGHTER),
					Pc.rollHp(Pc.MAGIC_USER),
					Pc.rollHp(Pc.THIEF)];
					expect(hp[0].hp > 0 && hp[0].hp < 7).toEqual(true);
					expect(hp[1].hp > 0 && hp[1].hp < 9).toEqual(true);
					expect(hp[2].hp > 0 && hp[2].hp < 5).toEqual(true);
					expect(hp[3].hp > 0 && hp[3].hp < 7).toEqual(true);
			}
		});
	});	 	
	describe('.generate()', () => {
		it('Given a list of ability scores, returns highest ability', () => {
			let pc = Pc.pregen();
			console.log(pc);			
			expect(pc.gold>9).toEqual(true);			
			expect(pc.hp>0).toEqual(true);			
			expect(pc.ability_scores.str>2&&pc.ability_scores.str<19).toEqual(true);			
		});
	});	   	
});  