#!/usr/bin/env node



import { roll } from "/lib/roll.js"
import minimist from "minimist"

let args = minimist(process.argv.slice(2))


const rolls = args.rolls? args.rolls:1
const sides = args.sides? args.sides:6
const dice = args.dice? args.dice:2



const user_output  = roll(sides, rolls, dice)
console.log(JSON.stringify(user_output))
