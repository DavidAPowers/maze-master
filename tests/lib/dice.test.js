"use strict";
const expect = require('chai').expect;
const Dice = require('../../lib/dice');

describe('Dice', () => {
	describe('.rollOne(sides)', () => {
		it('returns a random integer between 1 and sides', () => {
			let r1 = Dice.rollOne(6);
			let r2 = Dice.rollOne(6);
			let r3 = Dice.rollOne(6);
			expect((r1>0) && (r1<7)).to.equal(true);
			expect((r2>0) && (r2<7)).to.equal(true);
			expect((r3>0) && (r3<7)).to.equal(true);

			let rolls1 = [];
			let total1 = 0;
			for(let ia=0;ia<10000;ia++) {
				rolls1.push(Dice.rollOne(6));
			}
			for(let i in rolls1) {
				total1 = total1 + rolls1[i];
				expect((rolls1[i]>0) && (rolls1[i]<7)).to.equal(true);
			}
			
			let mean = total1 / 10000;
			//console.log(`mean: ${mean}`);
			expect((mean>3) && (mean<4)).to.equal(true);
			
			let rolls2 = [];
			for(let ib=0;ib<20000;ib++) {
				rolls2.push(Dice.rollOne(20));
			}
			let total2 = 0;
			for(let el in rolls2) {
				total2 += rolls2[el];
				expect((rolls2[el]>0) && (rolls2[el]<21)).to.equal(true);
			}
			let mean2 = total2 / 20000;
			//console.log(`mean2: ${mean2}`);
			expect(mean2>10 && mean2<11).to.equal(true);
			
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
				expect((rolls[i]>2) && (rolls[i]<19)).to.equal(true);
			}	    	
			let mean = t / 10000;
			//console.log(`3d6 mean: ${mean}`);
			expect((mean>10) && (mean<11)).to.equal(true);

		});
	});
	describe('.validFormat(dice)', () => {
		it('Given invalid data, should return new Lead', () => {
			let f1 = Dice.validFormat('0d0');
			let f2 = Dice.validFormat('0dxghg');
			let f3 = Dice.validFormat('fhfdd0');
			let f4 = Dice.validFormat('2d7');
			let f5 = Dice.validFormat('23d23');
			expect(f1).to.equal(true);
			expect(f2).to.equal(false);
			expect(f3).to.equal(false);
			expect(f4).to.equal(true);
			expect(f5).to.equal(true);
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
				expect((rolls[i]>2) && (rolls[i]<19)).to.equal(true);
			}	    	
			let mean = t / 10000;
			console.log(`3d6 mean: ${mean}`);
			expect((mean>10.3) && (mean<10.7)).to.equal(true);

			let bad = Dice.roll('gibberish');
			expect(bad).to.equal(0);
		});
	});  

});
