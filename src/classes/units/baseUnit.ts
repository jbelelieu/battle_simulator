export class BaseUnit {
	protected _strength: number = 10;
	protected _accuracy: number = 10;
	private __hp: number = 100;
	private __upgradeLevel: number = 1;

	public constructor(hp: number = 100, level: number = 1) {
		this.__hp = hp;
		this.__upgradeLevel = level;
	}

	public registerHit(damage: number): boolean {
		const newHp = this.__hp - damage;
		if (newHp <= 0) {
			return true;
		} else {
			this.__hp = newHp;

			return false;
		}
	}

	get hp(): number {
		return this.__hp;
	}

	get upgradeLevel(): number {
		return this.__upgradeLevel;
	}

	get stength(): number {
		return this._strength * this.__upgradeLevel;
	}

	get accuracy(): number {
		return this._accuracy * this.__upgradeLevel;
	}
}
