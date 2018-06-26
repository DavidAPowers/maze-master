"use strict";
const Wandering = require('../../lib/wandering');

describe('Wandering', () => {
	describe('.DEFAULT', () => {
		it('returns statlist array', () => {
			let d = Wandering.DEFAULT;
			expect(d[10]).toEqual('(d6) orcs');
		});
	});
	describe('.roll(level=1)', () => {
		it('Returns first level saving throws object for given class', () => {
			let roll = Wandering.roll();
			expect(roll).toEqual('(d6) orcs');
		});
	});	
});  