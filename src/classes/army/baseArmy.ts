import { AdvancedSoldier } from '../units/advancedSoldier';
import { MinuteMan } from '../units/minuteMan';
import { Soldier } from '../units/soldier';

export class BaseArmy {
	private _units: Array<AdvancedSoldier | MinuteMan | Soldier> = [];

	public addUnit(unit: AdvancedSoldier | MinuteMan | Soldier): void {
		this._units.push(unit);
	}

	public getSize(): number {
		return this._units.length;
	}

	public removeUnit(unitToRemove: number): void {
		this._units.splice(unitToRemove, 1);
	}

	public getUnit(index: number): AdvancedSoldier | MinuteMan | Soldier {
		return this._units[index];
	}

	get units(): Array<AdvancedSoldier | MinuteMan | Soldier> {
		return this._units;
	}
}
