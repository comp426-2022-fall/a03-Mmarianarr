// define a function that rolls the dice based on:
//sides of the dice given,number of dice given,number of times the dice are rolled

export function roll(sides, dice, roll) {	
var result = [];
	
for(let x = 0; x< roll; x++){
var a = 0;
for(let y = 0; y < dice; y++){
a+= Math.floor(Math.random() * sides) + 1;
}
result.push(a);
}
	
return {
sides: sides,
dice: dice,
rolls: roll,
results: result
}

	}

