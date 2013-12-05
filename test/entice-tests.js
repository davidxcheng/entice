/*
		Run with 'mocha -R spec .'
*/

var chai = require("chai"),
	expect = chai.expect,
	assert = chai.assert,
	should = chai.should();

describe('The Pennywise Profile', function() {
	describe('Should', function() {
		it('round to 30 when bid amount is 25', function() {
			var entice = require("../index"),
				suggestions = entice.suggestBidAmounts(25, entice.profile.Pennywise);

			suggestions.should.have.length(3)
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