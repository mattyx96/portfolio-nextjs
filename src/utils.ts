export const random = (min: number, max: number) => Math.random() * (max - min) + min;

export const randomPick = <T>(arr: T[]): T => arr[Math.floor(random(0, arr.length))];