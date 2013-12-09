;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = [{
		upperBound: 7,
		roundTo: 0,
		increments: [10, 20, 30]
	},
	{
		upperBound: 17,
		roundTo: 0,
		increments: [20, 30, 40]
	},
	{
		upperBound: 24,
		roundTo: 25,
		increments: [0, 25, 50]
	},
	{
		upperBound: 49,
		roundTo: 50,
		increments: [0, 25, 50]
	},
	{
		upperBound: 99,
		roundTo: 50,
		increments: [25, 50, 75]
	},
	{
		upperBound: 499,
		roundTo: 50,
		increments: [50, 100, 150]
	},
	{
		upperBound: 999,
		roundTo: 100,
		increments: [100, 200, 300]
	},
	{
		upperBound: 2499,
		roundTo: 100,
		increments: [200, 400, 600]
	},
	{
		upperBound: Number.POSITIVE_INFINITY,
		roundTo: 100,
		increments: [500, 1000, 1500]
	}];
},{}],2:[function(require,module,exports){
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
},{"./highroller":1,"./pennywise":3,"./rounder":4}],3:[function(require,module,exports){
module.exports = [{
		upperBound: 7,
		roundTo: 0,
		increments: [10, 20, 30]
	},
	{
		upperBound: 17,
		roundTo: 0,
		increments: [20, 30, 40]
	},
	{
		upperBound: 99,
		roundTo: 10,
		increments: [10, 20, 30]
	},
	{
		upperBound: 249,
		roundTo: 10,
		increments: [15, 30, 45]
	},
	{
		upperBound: 499,
		roundTo: 10,
		increments: [25, 50, 75]
	},
	{
		upperBound: 999,
		roundTo: 50,
		increments: [50, 150, 200]
	},
	{
		upperBound: 4999,
		roundTo: 100,
		increments: [100, 200, 400]
	},
	{
		upperBound: Number.POSITIVE_INFINITY,
		roundTo: 100,
		increments: [500, 1000, 1500]
	}];
},{}],4:[function(require,module,exports){
/*
	Rounds the amount to the nearest increment of roundTo.
	Examples: 24 -> 20, 25 -> 30
*/
module.exports = function(amount, roundTo) {
	return Math.round(amount / roundTo) * roundTo;
};
},{}]},{},[2])
;