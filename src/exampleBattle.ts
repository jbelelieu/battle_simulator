import * as argv from 'yargs';
import { Battle } from './classes/battle/battle';
import { UnitNames } from './classes/units/typeAliases';
import { spawnUnit } from './classes/units/types';
import { getRandomInt } from './helpers/math'; // getNumberInRange
import { generateArmy, runBattle } from './index';

const unitTypesCount = UnitNames.length;

// -----------------------------------
// General Battle Config
const args = argv.argv;
const totalRounds = args.rounds ? args.rounds : 10;
let armySize1 = args.army1 ? args.army1 : 100; // getNumberInRange(50, 100);
let armySize2 = args.army2 ? args.army2 : 100; // getNumberInRange(50, 100);
const holdArmy1Size = armySize1;
const holdArmy2Size = armySize2;

// -----------------------------------
// Sample 10 Round Army
const army1 = generateArmy();
const army2 = generateArmy();

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

console.log('\n* * * * * * * * * * * * * * * * * * * *\n');
console.log(`STARTING THE BATTLE...`);
console.log('ARMY 1 BUILDOUT:', JSON.stringify(army1));
console.log('ARMY 2 BUILDOUT:', JSON.stringify(army2));
console.log('\n* * * * * * * * * * * * * * * * * * * *\n');

runBattle(army1, army2, totalRounds).then((battleResults: Battle) => {
	console.log('\n* * * * * * * * * * * * * * * * * * * *\n');
	console.log('ARMY 1, BATTLE STATS: (start)', holdArmy1Size, '-> (end)', battleResults.army1.getSize(), battleResults.army1Stats);
	console.log('ARMY 2, BATTLE STATS: (start)', holdArmy2Size, '-> (end)', battleResults.army2.getSize(), battleResults.army2Stats);
	console.log('\n* * * * * * * * * * * * * * * * * * * *\n');
});
