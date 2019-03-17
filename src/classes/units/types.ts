import { AdvancedSoldier } from './advancedSoldier';
import { Cannon } from './cannon';
import { MinuteMan } from './minuteMan';
import { Soldier } from './soldier';
import { UnitTypes } from './typeAliases';

export function spawnUnit(unitType: string): UnitTypes {
	switch (unitType) {
		case 'AdvancedSoldier':
			return new AdvancedSoldier(100, 1);
		case 'Cannon':
			return new Cannon(100, 1);
		case 'MinuteMan':
			return new MinuteMan(100, 1);
		case 'Soldier':
			return new Soldier(100, 1);
		default:
			return new MinuteMan(100, 1);
	}
}
