/*
	Rounds the amount to the nearest increment of roundTo.
	Examples: 24 -> 20, 25 -> 30
*/
module.exports = function(amount, roundTo) {
	return Math.round(amount / roundTo) * roundTo;
};