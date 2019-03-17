import { BaseUnit } from './baseUnit';

export class Cannon extends BaseUnit {
	protected _strength: number = 6;
	protected _accuracy: number = 30;
	protected _cost: number = 500;
	protected _splashDamage: number = 5;
}
