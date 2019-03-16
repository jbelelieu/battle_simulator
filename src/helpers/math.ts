export function getRandomInt(max: number): number {
	return Math.floor(Math.random() * Math.floor(max));
}

export function getNumberInRange(min: number, max: number): number {
	const low = Math.ceil(min);
	const high = Math.floor(max);

	return Math.floor(Math.random() * (high - low + 1)) + low;
}
