module.exports = function(amount, roundTo) {
	return Math.round(amount / roundTo) * roundTo;
};