export function roll(sides, dice, roll) {	
let value = [];
	
for(let i = 0; i < roll; i++){
let n = 0;
for(let j = 0; j < dice; j++){
n += Math.floor(Math.random() * sides) + 1;
}
value.push(n);
}
	
return {
sides: sides,
dice: dice,
rolls: roll,
results: value
}

	}

