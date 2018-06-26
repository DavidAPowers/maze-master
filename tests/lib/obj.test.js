"use strict";
const Obj = require('../../lib/obj');

describe('Obj', () => {

	describe('.maxProp(o)', () => {
		it('Given an object with no properties, throws error', () => {
			let r1;
			let stats1 = { };
			expect(function(){
    		Obj.maxProp(stats1);
			}).toThrow('AbilityScore.maxProp() takes an object with at least one property');
		});
		it('Given an object with one property, returns the object', () => {
			let stats1 = { str: 14};
			let r1 = Obj.maxProp(stats1);
			expect(r1).toEqual({ str: 14});
		});
		it('Given an object with two properties, returns highest value property in object form as {key: value}', () => {
			let stats1 = { str: 14, con: 16};
			let stats2 = { wis: -8, dex: -16 };
			let r1 = Obj.maxProp(stats1);
			let r2 = Obj.maxProp(stats2);
			expect(r1).toEqual({ con: 16});
			expect(r2).toEqual({ wis: -8});
		});
		it('Given an object with more than 2 properties, returns highest value property in object form as {key: value}', () => {
			let stats1 = { str: 14, int: 10, wis: 11, dex: 12, con: 15, cha: 10 };
			let stats2 = { str: 11, int: 11, wis: 8, dex: 16, con: 12, cha: 15 };
			let stats3 = { str: 10, int: 15, wis: 14, dex: 12, con: 4, cha: 18};
			let r1 = Obj.maxProp(stats1);
			let r2 = Obj.maxProp(stats2);
			let r3 = Obj.maxProp(stats3);
			expect(r1).toEqual({ con: 15});
			expect(r2).toEqual({ dex: 16});
			expect(r3).toEqual({ cha: 18});
		});
	});	
	describe('.maxPropName(stats)', () => {
		it('Given a list of ability scores, returns highest ability', () => {
			let stats1 = { str: 14, int: 10, wis: 11, dex: 12, con: 15, cha: 10 };
			let stats2 = { str: 11, int: 11, wis: 8, dex: 16, con: 12, cha: 15 };
			let stats3 = { str: 10, int: 15, wis: 14, dex: 12, con: 4, cha: 18};
			let r1 = Obj.maxPropName(stats1);
			let r2 = Obj.maxPropName(stats2);
			let r3 = Obj.maxPropName(stats3);
			expect(r1).toEqual('con');
			expect(r2).toEqual('dex');
			expect(r3).toEqual('cha');
		});
	});
	describe('.pairMax(o)', () => {
		it('Checks first two object properties and returns highest as an object', () => {
			const scores = { 
			  str: 15,
			  con: 12
			};
			const pm = Obj.pairMax(scores);
			expect(pm).toEqual({ str: 15 });
		});
	});	
	describe('.subset(o,keys)', () => {
		it('Returns an object with only properties defined in keys', () => {
			const scores = { 
			  str: 15,
			  con: 12,
			  dex: 10,
			  wis: 7
			};
			const subset = Obj.subset(['str', 'dex'], scores);
			console.log(subset);		
			expect(subset).toEqual({ str: 15, dex: 10 });
		});
	});	
});  