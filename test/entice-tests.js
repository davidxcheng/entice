var chai = require("chai"),
	expect = chai.expect,
	assert = chai.assert,
	should = chai.should();

describe('The Pennywise Profile', function() {
	describe('Should', function() {

		var entice = require('../index'),
			testCases = [];

		testCases.push({ amount: 1, expected: [10, 20, 30] });
		testCases.push({ amount: 5, expected: [10, 20, 30] });
		testCases.push({ amount: 6, expected: [10, 20, 30] });
		testCases.push({ amount: 7, expected: [10, 20, 30] });
		testCases.push({ amount: 8, expected: [20, 30, 40] });

		testCases.forEach(function(tc) {
			it('suggest ' + tc.expected.join(',') + ' when bid amount is ' + tc.amount, function() {
				var actual = entice.suggestBidAmounts(tc.amount, entice.profile.Pennywise);
				expect(actual).to.eql(tc.expected);
			})
		});
	});
/*
	describe('Should', function() {
		it('round to 100 when bid amount is more than 4999', function() {
			var entice = require("../index"),
				rule = entice.suggestBidAmounts(5000, entice.profile.Pennywise);

			assert.equal(rule.roundTo, 100);
		});
	});*/
});