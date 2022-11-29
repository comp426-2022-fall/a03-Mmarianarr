#!/usr/bin/env node	
	
import {roll} from "../lib/roll.js";
import minimist from "minimist";
	
const args = minimist(process.argv.slice(2));

var rolls = args.roll || 1;	
var dice = args.dice || 2;
var sides = args.sides || 6;

console.log(JSON.stringify(roll(sides, dice, rolls)))
