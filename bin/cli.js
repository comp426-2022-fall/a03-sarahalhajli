#!/usr/bin/env node
import { roll } from "../lib/roll.js";
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));

var sides = args.sides;
var dice = args.dice;
var rolls = args.rolls;

if(args.sides == "") {
	sides = 6;
}
if(args.dice == "") {
	dice = 2;
}
if(args.rolls == "") {
	rolls = 1;
}

var results = roll(sides, dice, rolls);

console.log(JSON.stringify({sides: sides, dice: dice, rolls: rolls, results: results}));

process.exit(0);