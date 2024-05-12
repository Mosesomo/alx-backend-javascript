const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function() {
    it(`should return the sum of two rounded numbers (integer and integer)`, function() {
      const res = calculateNumber(1, 2, "SUM");
      assert.strictEqual(res, 3);
    });
    it(`should return the difference of two rounded numbers (float and float)`, function() {
      const res = calculateNumber(1.4, 2.2, "SUBTRACT");
      assert.strictEqual(res, 1);
    });
    it(`should return the difference of two rounded numbers (float and float)`, function() {
      const res = calculateNumber(4.9, 2.7, "SUBTRACT");
      assert.strictEqual(res, -2);
    });
    it(`should return the division of two rounded numbers (integer and integer)`, function() {
      const res = calculateNumber(4, 2, "DIVIDE");
      assert.strictEqual(res, 2);
    });
    it(`should return "Error" if the second number is rounded to 0`, function() {
      const res = calculateNumber(1.7, 0, "DIVIDE");
      assert.strictEqual(res, "Error");
    });
    it(`should return the division of two rounded numbers (float and float)`, function() {
      const res = calculateNumber(1.4, 4.6, "DIVIDE");
      assert.strictEqual(res, 0.2);
    });
});
