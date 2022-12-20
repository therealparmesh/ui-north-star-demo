import { clamp, subtract } from 'lodash-es';

console.log('local!');

export const subtractNumbers = (a: number, b: number) => subtract(a, b);

export const subtractNumbersAsync = (a: number, b: number) =>
  Promise.resolve(subtract(a, b));
