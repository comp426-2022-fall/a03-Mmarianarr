//command line interface should take three arguments with the following defaults
// the number of sides of the die you are rolling (default to 6 sides)
//the number of dice you are rolling (default to 2 dice).
//the number of times the dice are rolled (default to 1 time).

#!/usr/bin/env node	
	
import {roll} from "../lib/roll.js";
import minimist from "minimist";
	
let args = minimist(process.argv.slice(2));

let rolls = args.roll || 1;	
let dice = args.dice || 2;
let sides = args.sides || 6;

console.log(JSON.stringify(roll(sides, dice, rolls)))
