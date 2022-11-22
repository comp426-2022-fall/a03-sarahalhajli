import minimist from 'minimist';

export function roll(sides, dice, rolled) {
	if(sides==null) {
		sides = 6;
	}
	
	if(dice==null) {
		dice = 2;
	}
	
	if(rolled==null) {
		rolled = 1;
	}
	
	var rolls = [];
	for(let i = 0; i<rolled; i++) {
		for(let i = 0; i<dice; i++){
			var randomRoll = Math.floor(Math.random() * sides) + 1;
			randomRoll += randomRoll;
		}
		rolls.push(randomRoll);
	}
	
	return rolls;
}