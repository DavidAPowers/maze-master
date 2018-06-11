class CharClass {
	static fighter() {return CharClass.FIGHTER;}
	static get FIGHTER() {return "Fighter";}
	static get THIEF() {return "Thief";}
	static get CLERIC() {return "Cleric";}
	static get MAGIC_USER() {return "Magic User";}
	
}

module.exports = CharClass;