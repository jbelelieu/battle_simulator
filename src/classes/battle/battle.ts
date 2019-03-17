import { getRandomInt } from '../../helpers/math';
import { Army } from '../army/army';
import { Istats } from '../interface/stats';
import { UnitTypes } from '../units/typeAliases';

export class Battle {
	private __finalArmy1Stats: Istats;
	private __finalArmy2Stats: Istats;
	private __rawArmy1Stats: Array<Istats> = [];
	private __rawArmy2Stats: Array<Istats> = [];
	private __army1: Army;
	private __army2: Army;
	private __totalRounds: number;

	public constructor(totalRounds: number, army1: Army, army2: Army) {
		this.__army1 = army1;
		this.__army2 = army2;
		this.__totalRounds = totalRounds;
	}

	get army1(): Army {
		return this.__army1;
	}

	get army2(): Army {
		return this.__army2;
	}

	get army1Stats(): Istats {
		return this.__finalArmy1Stats;
	}

	get army2Stats(): Istats {
		return this.__finalArmy2Stats;
	}

	public async run(): Promise<Battle> {
		for (let i = 0; i < this.__totalRounds; i += 1) {
			console.log(`Starting Round ${i}...`);

			if (this.__army1.getSize() === 0 || this.__army2.getSize() === 0) {
				break;
			}

			const a1Stats = this.play(this.__army1, this.__army2);
			this.__rawArmy1Stats.push(a1Stats);

			console.log('Army 1 Stats', a1Stats);

			const a2Stats = this.play(this.__army2, this.__army1);
			this.__rawArmy2Stats.push(a2Stats);

			console.log('Army 2 Stats', a2Stats);
		}

		await this.completeRound(this.__rawArmy1Stats, this.__rawArmy2Stats);

		return this;
	}

	private async completeRound(army1Stats: Array<Istats>, army2Stats: Array<Istats>): Promise<void> {
		this.__finalArmy1Stats = army1Stats.reduce(this.battleTotals);
		this.__finalArmy2Stats = army2Stats.reduce(this.battleTotals);
	}

	private battleTotals(a: Istats, b: Istats) {
		return {
			hits: a.hits + b.hits,
			damage: a.damage + b.damage,
			kills: a.kills + b.kills,
			attempts: a.attempts + b.attempts
		};
	}

	private play(army: Army, otherArmy: Army): Istats {
		const stats = {
			attempts: army.units.length,
			hits: 0,
			damage: 0,
			kills: 0
		};

		army.units.forEach(async (unit: UnitTypes) => {
			const randomChance = getRandomInt(100);

			if (randomChance <= unit.accuracy) {
				const hitUnits = this.getUnitsHit(otherArmy.units, unit.splashDamage);

				stats.hits += unit.splashDamage;
				stats.damage += unit.stength * unit.splashDamage;

				for (let x = 0; x < unit.splashDamage; x++) {
					try {
						const outcome = otherArmy.getUnit(hitUnits[x]).registerHit(unit.stength);

						if (outcome) {
							stats.kills += 1;

							otherArmy.removeUnit(hitUnits[x]);
						}
					} catch (e) {
						// console.warn('-> ERROR', hitUnits[x], x);
					}
				}
			}
		});

		return stats;
	}

	private getUnitsHit(unitArray: Array<UnitTypes>, totalToHit: number = 1): Array<number> {
		let actualTotalWeAreHitting = totalToHit;

		if (unitArray.length < totalToHit) {
			actualTotalWeAreHitting = unitArray.length;
		}

		if (unitArray.length === 1) {
			return [ 0 ];
		} else if (actualTotalWeAreHitting === 0) {
			return [];
		}

		const arr: Array<number> = [];

		while (arr.length < actualTotalWeAreHitting) {
			const selected = Math.floor(Math.random() * unitArray.length);

			if (arr.indexOf(selected) === -1 && unitArray[selected] != null) {
				arr.push(selected);
			}
		}

		return arr;
	}
}
