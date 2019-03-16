import { AdvancedSoldier } from './advancedSoldier';
import { MinuteMan } from './minuteMan';
import { Soldier } from './soldier';

export const unitTypes = [ 'AdvancedSoldier', 'MinuteMan', 'Soldier' ];

export function spawnUnit(unitType: string): AdvancedSoldier | MinuteMan | Soldier {
	switch (unitType) {
		case 'AdvancedSoldier':
			return new AdvancedSoldier(100, 1);
		case 'MinuteMan':
			return new MinuteMan(100, 1);
		case 'Soldier':
			return new Soldier(100, 1);
		default:
			return new MinuteMan(100, 1);
	}
}
