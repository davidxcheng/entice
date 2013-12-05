var chai = require("chai"),
	expect = chai.expect,
	assert = chai.assert,
	should = chai.should();

describe('Rounder', function() {
	describe('Should', function() {
		var cases = [];

		cases.push({ input: { amount: 24, roundTo: 10 }, expected: 20 });
		cases.push({ input: { amount: 25, roundTo: 10 }, expected: 30 });
		cases.push({ input: { amount: 34, roundTo: 10 }, expected: 30 });
		cases.push({ input: { amount: 999, roundTo: 50 }, expected: 1000 });

		cases.forEach(function(c){
			it('round to ' + c.expected + ' when bid amount is ' + c.input.amount, function() {
				var rounder = require("../rounder");
				var actual = rounder(c.input.amount, c.input.roundTo);
				actual.should.equal(c.expected);
			});
		});
	});
});