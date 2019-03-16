import { Army } from './classes/army/army';
import { getNumberInRange } from './helpers/math';
import { MinuteMan } from './classes/units/minuteman';
import { Battle } from './classes/battle/battle';

// -----------------------------------
// General Battle Config
const totalRounds = 10;
let armySize1 = getNumberInRange(7500, 10000);
let armySize2 = getNumberInRange(7500, 10000);

// -----------------------------------
// Prep the battle
const army1 = new Army();
const army2 = new Army();

console.log('\n* * * * * * * * * * * * * * * * * * * *\n');
console.log('PREPPING THE BATTLE');
console.log('Army 1 Start Size', armySize1);
console.log('Army 2 Start Size', armySize2);

while (armySize1 > 0) {
	army1.addUnit(new MinuteMan(100, 1));
	armySize1--;
}

while (armySize2 > 0) {
	army2.addUnit(new MinuteMan(100, 1));
	armySize2--;
}

// -----------------------------------
// Start the battle, 10 rounds
console.log('\n* * * * * * * * * * * * * * * * * * * *\n');
console.log(`STARTING THE BATTLE...`);

const battle = new Battle(totalRounds, army1, army2);

runBattle(battle).then((battleResults: Battle) => {
	console.log('\n* * * * * * * * * * * * * * * * * * * *\n');
	console.log('ARMY STATS 1', battleResults.army1.getSize(), battleResults.army1Stats);
	console.log('ARMY STATS 2', battleResults.army2.getSize(), battleResults.army2Stats);
	console.log('\n* * * * * * * * * * * * * * * * * * * *\n');
});

async function runBattle(battle: Battle): Promise<Battle> {
	return await battle.run();
}
