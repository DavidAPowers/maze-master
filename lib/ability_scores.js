class AbilityScores {
	static highest(scores) {
		let ability = "";
		let current = 0;
		for(let key in scores) {
			if(scores[key] > current) {
				ability = key;
				current = scores[key];
			}
		}
		return ability;
	}
	static highestPrime(scores) {
		let primes = ['str','dex','int','wis'];
		let ability = "";
		let current = 0;
		for(let i in primes) {
			let key = primes[i]
			if(scores[key] > current) {
				ability = key;
				current = scores[key];
			}
		}
		return ability;		
	}
}

module.exports = AbilityScores;