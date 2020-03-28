import { Army } from './classes/army/army';
import { Battle } from './classes/battle/battle';

/**
 * You'll need to manually add units into the army after generating it.
 * See "exampleBattle.ts" for more information.
 */
export function generateArmy(): Army {
	return new Army();
}

export async function runBattle(inputArmy1: Army, inputArmy2: Army, numberOfRounds: number = 10): Promise<Battle> {
	const battle = new Battle(numberOfRounds, inputArmy1, inputArmy2); 
	
	return battle.run();
}
