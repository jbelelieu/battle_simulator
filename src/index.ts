import { Army } from './classes/army/army';
import { getRandomInt, getNumberInRange } from './helpers/math';
import { spawnUnit } from './classes/units/types';
import { UnitNames } from './classes/units/typeAliases';
import { Battle } from './classes/battle/battle';

const unitTypesCount = UnitNames.length;

// -----------------------------------
// General Battle Config
const totalRounds = 10;
let armySize1 = getNumberInRange(15000, 25000);
let armySize2 = getNumberInRange(15000, 25000);
let holdArmy1Size = armySize1;
let holdArmy2Size = armySize1;

// -----------------------------------
// Prep the battle
const army1 = new Army();
const army2 = new Army();

console.log('\n* * * * * * * * * * * * * * * * * * * *\n');
console.log('PREPPING THE BATTLE');
console.log('Army 1 Start Size', armySize1);
console.log('Army 2 Start Size', armySize2);

while (armySize1 > 0) {
	army1.addUnit(spawnUnit(UnitNames[getRandomInt(unitTypesCount)]));
	armySize1--;
}

while (armySize2 > 0) {
	army2.addUnit(spawnUnit(UnitNames[getRandomInt(unitTypesCount)]));
	armySize2--;
}

// -----------------------------------
// Start the battle, 10 rounds
console.log('\n* * * * * * * * * * * * * * * * * * * *\n');
console.log(`STARTING THE BATTLE...`);

const battle = new Battle(totalRounds, army1, army2);

runBattle(battle).then((battleResults: Battle) => {
	console.log('\n* * * * * * * * * * * * * * * * * * * *\n');
	console.log('ARMY 1, BATTLE STATS:', holdArmy1Size, '->', battleResults.army1.getSize(), battleResults.army1Stats);
	console.log('ARMY 2, BATTLE STATS:', holdArmy2Size, '->', battleResults.army2.getSize(), battleResults.army2Stats);
	console.log('\n* * * * * * * * * * * * * * * * * * * *\n');
});

async function runBattle(battle: Battle): Promise<Battle> {
	return await battle.run();
}
