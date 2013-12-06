var _profile = {
		Pennywise: 1,
		Highroller: 2
	};

var pennywise = require("./pennywise"),
	highroller = require("./highroller"),
	rounder = require("./rounder");

function suggestBidAmounts(currentBidAmount, profile) {
	var p = profile === _profile.Highroller ? highroller : pennywise,
		rule;

	for(var i = 0; i < p.length; i++) {
		if(currentBidAmount <= p[i].upperBound) {
			rule = p[i];
			break;
		}
	}

	if (rule.roundTo == 0)
		return rule.increments;

	var roundedBidAmount = rounder(currentBidAmount, rule.roundTo),
		suggestedAmounts = rule.increments.map(function(increment) {
			return roundedBidAmount + increment;
		});

	return suggestedAmounts;
}

module.exports = {
	profile: _profile,
	suggestBidAmounts: suggestBidAmounts
};