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
		testCases.push({ amount: 99, expected: [110, 120, 130] });
		testCases.push({ amount: 100, expected: [115, 130, 145] });
		testCases.push({ amount: 231, expected: [245, 260, 275] });
		testCases.push({ amount: 249, expected: [265, 280, 295] });
		testCases.push({ amount: 250, expected: [275, 300, 325] });
		testCases.push({ amount: 254, expected: [275, 300, 325] });
		testCases.push({ amount: 444, expected: [465, 490, 515] });
		testCases.push({ amount: 445, expected: [475, 500, 525] });
		testCases.push({ amount: 499, expected: [525, 550, 575] });
		testCases.push({ amount: 500, expected: [550, 650, 700] });
		testCases.push({ amount: 549, expected: [600, 700, 750] });
		testCases.push({ amount: 550, expected: [600, 700, 750] });
		testCases.push({ amount: 555, expected: [600, 700, 750] });
		testCases.push({ amount: 924, expected: [950, 1050, 1100] });
		testCases.push({ amount: 925, expected: [1000, 1100, 1150] });
		testCases.push({ amount: 950, expected: [1000, 1100, 1150] });
		testCases.push({ amount: 999, expected: [1050, 1150, 1200] });
		testCases.push({ amount: 1000, expected: [1100, 1200, 1400] });
		testCases.push({ amount: 1050, expected: [1200, 1300, 1500] });
		testCases.push({ amount: 3649, expected: [3700, 3800, 4000] });
		testCases.push({ amount: 3650, expected: [3800, 3900, 4100] });
		testCases.push({ amount: 4999, expected: [5100, 5200, 5400] });
		testCases.push({ amount: 5000, expected: [5500, 6000, 6500] });
		testCases.push({ amount: 5049, expected: [5500, 6000, 6500] });
		testCases.push({ amount: 5249, expected: [5700, 6200, 6700] });
		testCases.push({ amount: 5250, expected: [5800, 6300, 6800] });
		testCases.push({ amount: 1005250, expected: [1005800, 1006300, 1006800] });

		testCases.forEach(function(tc) {
			it('suggest ' + tc.expected.join(', ') + ' when bid amount is ' + tc.amount, function() {
				var actual = entice.suggestBidAmounts(tc.amount, entice.profile.Pennywise);
				expect(actual).to.eql(tc.expected);
			})
		});
	});
});