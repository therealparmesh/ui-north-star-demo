import { add, clamp } from 'lodash-es';

console.log('local!');

export const addNumbers = (a: number, b: number) => add(a, b);

export const addNumbersAsync = (a: number, b: number) =>
  Promise.resolve(add(a, b));
