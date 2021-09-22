// import { test } from '@jest/globals';
// import * as Calculator from './calculator.js';

const calculator = require('./calculator');

test("testando soma de 1+1", () => {
	expect(calculator.soma(1,1)).toBe(2);
});

test("testando divisao de 42/6", () => {
	expect(calculator.divisao(42,6)).toBe(7);
});