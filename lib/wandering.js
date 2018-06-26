const Wandering = {
	DEFAULT: {
		1: '(d6) orcs',
		2: '(d6) orcs',
		3: '(d6) orcs',
		4: '(d6) orcs',
		5: '(d6) orcs',
		6: '(d6) orcs',
		7: '(d6) orcs',
		8: '(d6) orcs',
		9: '(d6) orcs',
		10: '(d6) orcs',
		11: '(d6) orcs',
		12: '(d6) orcs',
		13: '(d6) orcs',
		14: '(d6) orcs',
		15: '(d6) orcs',
		16: '(d6) orcs',
		17: '(d6) orcs',
		18: '(d6) orcs',
		19: '(d6) orcs',
		20: '(d6) orcs'
	},
	roll(lvl=1) {
		return Wandering.DEFAULT[1];
	}
};
module.exports = Object.freeze(Wandering);