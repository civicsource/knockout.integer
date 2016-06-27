var ko = require("knockout");
var acct = require("accounting");

ko.extenders.integer = function (target, defaultValue) {
	var result = ko.computed({
		read: target, //always return the original observable's value
		write: function (value) {
			//force to a valid integer
			var integerValue = parseInt(value, 10);
			var intDefault = parseInt(defaultValue,10);
			if (isNaN(integerValue)) {
				if (!isNaN(intDefault)) {
					target(intDefault);
				}
				else {
					target(0);
				}
			}
			else {
				target(integerValue);
			}
		}
	});

	result.formatted = ko.computed(function () {
		return acct.formatNumber(result());
	});

	return result;
};