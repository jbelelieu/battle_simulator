import { UnitTypes } from '../units/typeAliases';

export class BaseArmy {
	private _units: Array<UnitTypes> = [];

	public addUnit(unit: UnitTypes): void {
		this._units.push(unit);
	}

	public getSize(): number {
		return this._units.length;
	}

	public removeUnit(unitToRemove: number): void {
		this._units.splice(unitToRemove, 1);
	}

	public getUnit(index: number): UnitTypes {
		return this._units[index];
	}

	get units(): Array<UnitTypes> {
		return this._units;
	}
}
