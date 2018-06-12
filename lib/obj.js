const Obj = {
	maxPropName(scores) {
		return Object.keys(Obj.maxProp(scores))[0];
	},
	//return object property with maximum value
	maxProp(o) {
		const props = Object.getOwnPropertyNames(o);
		if(props.length===0) {throw new Error("AbilityScore.maxProp() takes an object with at least one property");}
		else if(props.length===1) {return o;}
		else if(props.length===2) {
			//return highest of the key val pair
			return Obj.pairMax(o);
		} else {
			let pairProps = props.splice(props.length-2,2);
			let pairMax = Obj.pairMax(Obj.subset(pairProps, o));
			return Obj.maxProp(Object.assign(Obj.subset(props,o),pairMax));
		}
	},
 	subset(keys, obj) {
 		return keys.reduce((a, c) => ({ ...a, [c]: obj[c] }), {});
 	},
 	pairMax(o) {
		if(Object.keys(o).length!==2) {throw new Error("Obj.pairMax only accepts an object with two properties");}
		[k0, k1] = Object.keys(o);
 		return (o[k0]>o[k1] ? {[k0]: o[k0]} : {[k1]: o[k1]});
 	}
}

module.exports = Object.freeze(Obj);