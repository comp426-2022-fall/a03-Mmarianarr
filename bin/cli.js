#!/usr/bin/env node	

//command line interface should take three arguments with the following defaults:
//sides -the number of sides of the die you are rolling (default to 6 sides).
//dice  -the number of dice you are rolling (default to 2 dice).
//rolls -the number of times the dice are rolled (default to 1 time).
	
import {roll} from "../lib/roll.js";
import minimist from "minimist";
	
const args = minimist(process.argv.slice(2));

var rolls = args.roll || 1;	
var dice = args.dice || 2;
var sides = args.sides || 6;

console.log(JSON.stringify(roll(sides, dice, rolls)))

