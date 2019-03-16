import { MinuteMan } from '../units/minuteman';

export class BaseArmy {
	private _units: Array<MinuteMan> = [];

	public addUnit(unit: MinuteMan): void {
		this._units.push(unit);
	}

	public getSize(): number {
		return this._units.length;
	}

	public removeUnit(unitToRemove: number): void {
		this._units.splice(unitToRemove, 1);
	}

	public getUnit(index: number): MinuteMan {
		return this._units[index];
	}

	get units(): Array<MinuteMan> {
		return this._units;
	}
}
