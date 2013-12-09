var chai = require("chai"),
	expect = chai.expect,
	assert = chai.assert,
	should = chai.should();

describe('The Highroller Profile', function() {
	describe('Should', function() {

		var entice = require('../index'),
			testCases = [];

		testCases.push({ amount: 1, expected: [10, 20, 30] });
		testCases.push({ amount: 5, expected: [10, 20, 30] });
		testCases.push({ amount: 6, expected: [10, 20, 30] });
		testCases.push({ amount: 7, expected: [10, 20, 30] });
		testCases.push({ amount: 8, expected: [20, 30, 40] });
		testCases.push({ amount: 17, expected: [20, 30, 40] });
		testCases.push({ amount: 18, expected: [25, 50, 75] });
		testCases.push({ amount: 24, expected: [25, 50, 75] });
		testCases.push({ amount: 25, expected: [50, 75, 100] });
		testCases.push({ amount: 50, expected: [75, 100, 125] });
		testCases.push({ amount: 75, expected: [125, 150, 175] });
		testCases.push({ amount: 100, expected: [150, 200, 250] });
		testCases.push({ amount: 175, expected: [250, 300, 350] });
		testCases.push({ amount: 249, expected: [300, 350, 400] });
		testCases.push({ amount: 250, expected: [300, 350, 400] });
		testCases.push({ amount: 475, expected: [550, 600, 650] });
		testCases.push({ amount: 500, expected: [600, 700, 800] });
		testCases.push({ amount: 550, expected: [700, 800, 900] });
		testCases.push({ amount: 950, expected: [1100, 1200, 1300] });
		testCases.push({ amount: 1000, expected: [1200, 1400, 1600] });
		testCases.push({ amount: 1050, expected: [1300, 1500, 1700] });
		testCases.push({ amount: 1350, expected: [1600, 1800, 2000] });
		testCases.push({ amount: 2499, expected: [2700, 2900, 3100] });
		testCases.push({ amount: 3099, expected: [3600, 4100, 4600] });
		testCases.push({ amount: 5000, expected: [5500, 6000, 6500] });
		testCases.push({ amount: 5049, expected: [5500, 6000, 6500] });
		testCases.push({ amount: 5249, expected: [5700, 6200, 6700] });
		testCases.push({ amount: 5250, expected: [5800, 6300, 6800] });
		testCases.push({ amount: 1005250, expected: [1005800, 1006300, 1006800] });

		testCases.forEach(function(tc) {
			it('suggest ' + tc.expected.join(', ') + ' when bid amount is ' + tc.amount, function() {
				var actual = entice.suggestBidAmounts(tc.amount, entice.profile.Highroller);
				expect(actual).to.eql(tc.expected);
			})
		});
	});
});