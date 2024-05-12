const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber()', () => {
    it(`should return the sum of two rounded numbers (integer and integer)`, () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it(`should return the sum of two rounded numbers (integer and float)`, () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it(`should return the sum of two rounded numbers (float and integer)`, () => {
        assert.strictEqual(calculateNumber(1.2, 3), 4);
    });

    it(`should return the sum of two rounded numbers (float and float) rounding up`, () => {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
});
