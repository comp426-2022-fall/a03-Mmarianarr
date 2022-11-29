export function roll(numSides, numDice, numRoll) {	
	var value = [];
	
	for(var i = 0; i < numRoll; i++){
	let a = 0;
	for(var j = 0; j < numDice; j++){
	a += Math.floor(Math.random() * numSides) + 1;
	}
	value.push(a);
	}
	
	return {
	numSides: numSides,
	numDice: numDice,
	numRolls: numRoll,
	results: value
	}
	
	
	
	
	
	
	}

