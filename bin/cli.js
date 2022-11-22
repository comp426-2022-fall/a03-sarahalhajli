#!/usr/bin/env node
import { roll } from "../lib/roll.js";
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));

var sides = args.sides;
var dice = args.dice;
var rolls = args.rolls;

var results = roll(sides, dice, rolls);

console.log(JSON.stringify({results}));

process.exit(0);