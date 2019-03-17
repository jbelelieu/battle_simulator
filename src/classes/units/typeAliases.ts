import { AdvancedSoldier } from '../units/advancedSoldier';
import { Cannon } from '../units/cannon';
import { MinuteMan } from '../units/minuteMan';
import { Soldier } from '../units/soldier';

export type UnitTypes = AdvancedSoldier | Cannon | MinuteMan | Soldier;

export const UnitNames: Array<string> = [ 'AdvancedSoldier', 'Cannon', 'MinuteMan', 'Soldier' ];
