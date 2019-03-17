import { UnitTypes } from '../units/typeAliases';

export class BaseArmy {
	protected _leadershipBoost: number = 1;
	private __units: Array<UnitTypes> = [];

	public addUnit(unit: UnitTypes): void {
		this.__units.push(unit);
	}

	public getSize(): number {
		return this.__units.length;
	}

	public removeUnit(unitToRemove: number): void {
		this.__units.splice(unitToRemove, 1);
	}

	public getUnit(index: number): UnitTypes {
		return this.__units[index];
	}

	get units(): Array<UnitTypes> {
		return this.__units;
	}

	get leadershipBoost(): number {
		return this._leadershipBoost;
	}
}
