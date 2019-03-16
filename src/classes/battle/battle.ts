import { getRandomInt } from '../../helpers/math';
import { Army } from '../army/army';
import { Istats } from '../interface/stats';
import { MinuteMan } from '../units/minuteman';

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
			console.log(`Starting Round...`);

			const a1Stats = await this.play(this.__army1, this.__army2);
			this.__rawArmy1Stats.push(a1Stats);

			console.log('Army 1 Stats', a1Stats);

			const a2Stats = await this.play(this.__army2, this.__army1);
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
			kills: a.kills + b.kills
		};
	}

	private play(army: Army, otherArmy: Army): Istats {
		const stats = {
			hits: 0,
			damage: 0,
			kills: 0
		};

		army.units.forEach(async (unit: MinuteMan) => {
			if (getRandomInt(100) <= unit.accuracy) {
				const randomSelection = getRandomInt(otherArmy.getSize());

				const rando = otherArmy.getUnit(randomSelection);

				if (rando) {
					stats.hits += 1;
					stats.damage += unit.stength;

					const outcome = otherArmy.getUnit(randomSelection).registerHit(unit.stength);

					if (outcome) {
						stats.kills += 1;

						otherArmy.removeUnit(randomSelection);
					}
				}
			}
		});

		return stats;
	}
}
