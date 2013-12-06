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
		testCases.push({ amount: 17, expected: [20, 30, 40] });
		testCases.push({ amount: 18, expected: [30, 40, 50] });
		testCases.push({ amount: 24, expected: [30, 40, 50] });
		testCases.push({ amount: 25, expected: [40, 50, 60] });
		testCases.push({ amount: 34, expected: [40, 50, 60] });
		testCases.push({ amount: 35, expected: [50, 60, 70] });
		testCases.push({ amount: 94, expected: [100, 110, 120] });
		testCases.push({ amount: 95, expected: [110, 120, 130] });

		testCases.forEach(function(tc) {
			it('suggest ' + tc.expected.join(', ') + ' when bid amount is ' + tc.amount, function() {
				var actual = entice.suggestBidAmounts(tc.amount, entice.profile.Pennywise);
				expect(actual).to.eql(tc.expected);
			})
		});
	});
});