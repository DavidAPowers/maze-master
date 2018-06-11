"use strict";
const Dice = require('../../lib/dice');

describe('Dice', () => {
	describe('.rollOne(sides)', () => {
		it('returns a random integer between 1 and sides', () => {
			let r1 = Dice.rollOne(6);
			let r2 = Dice.rollOne(6);
			let r3 = Dice.rollOne(6);
			expect((r1>0) && (r1<7)).toEqual(true);
			expect((r2>0) && (r2<7)).toEqual(true);
			expect((r3>0) && (r3<7)).toEqual(true);

			let rolls1 = [];
			let total1 = 0;
			for(let ia=0;ia<10000;ia++) {
				rolls1.push(Dice.rollOne(6));
			}
			for(let i in rolls1) {
				total1 = total1 + rolls1[i];
				expect((rolls1[i]>0) && (rolls1[i]<7)).toEqual(true);
			}
			
			let mean = total1 / 10000;
			console.log(`mean: ${mean}`);
			expect((mean>3) && (mean<4)).toEqual(true);
			
			let rolls2 = [];
			for(let ib=0;ib<20000;ib++) {
				rolls2.push(Dice.rollOne(20));
			}
			let total2 = 0;
			for(let el in rolls2) {
				total2 += rolls2[el];
				expect((rolls2[el]>0) && (rolls2[el]<21)).toEqual(true);
			}
			let mean2 = total2 / 20000;
			console.log(`mean2: ${mean2}`);
			expect(mean2>10 && mean2<11).toEqual(true);
			
		});
	});
	describe('.rollDice(n,sides)', () => {
		it('Given invalid data, should return new Lead', () => {
			let rolls = [];
			let t = 0;
			for(let i=0;i<10000;i++) {
				rolls.push(Dice.rollDice(3,6));
			}
			for(let i in rolls) {
				t += rolls[i];
				expect((rolls[i]>2) && (rolls[i]<19)).toEqual(true);
			}	    	
			let mean = t / 10000;
			console.log(`3d6 mean: ${mean}`);
			expect((mean>10) && (mean<11)).toEqual(true);

		});
	});
	describe('.validFormat(dice)', () => {
		it('Given invalid data, should return new Lead', () => {
			let f1 = Dice.validFormat('0d0');
			let f2 = Dice.validFormat('0dxghg');
			let f3 = Dice.validFormat('fhfdd0');
			let f4 = Dice.validFormat('2d7');
			let f5 = Dice.validFormat('23d23');
			expect(f1).toEqual(true);
			expect(f2).toEqual(false);
			expect(f3).toEqual(false);
			expect(f4).toEqual(true);
			expect(f5).toEqual(true);
		});
	});
	describe('.roll(dice)', () => {
		it('Given invalid data, should return new Lead', () => {
			let rolls = [];
			let t = 0;
			for(let i=0;i<10000;i++) {
				rolls.push(Dice.roll('3d6'));
			}
			for(let i in rolls) {
				t += rolls[i];
				expect((rolls[i]>2) && (rolls[i]<19)).toEqual(true);
			}	    	
			let mean = t / 10000;
			console.log(`3d6 mean: ${mean}`);
			expect((mean>10.4) && (mean<10.6)).toEqual(true);

			let bad = Dice.roll('gibberish');
			expect(bad).toEqual(0);
		});
	});  
	describe('.rollStats(stats,dice)', () => {
		it('Given invalid data, should return new Lead', () => {
			let ok = Dice.rollStats('gold','2d6');
			expect(ok.gold>1&&ok.gold<13).toEqual(true);
			console.log(`gold: ${ok.gold}`);			
			let bad = Dice.rollStats('gibberish');
			expect(bad.gibberish).toEqual(0);
			for(let i=0;i<10000;i++) {
				let stats = Dice.rollStats(['str','int','wis','dex','con','cha'],'3d6');
				expect(stats.str>2&&stats.str<19).toEqual(true);
				expect(stats.int>2&&stats.int<19).toEqual(true);
				expect(stats.wis>2&&stats.wis<19).toEqual(true);
				expect(stats.dex>2&&stats.dex<19).toEqual(true);
				expect(stats.con>2&&stats.con<19).toEqual(true);
				expect(stats.cha>2&&stats.cha<19).toEqual(true);				
			}
			console.log(Dice.rollStats(['str','int','wis','dex','con','cha'],'3d6'));
		});
	});    
});
