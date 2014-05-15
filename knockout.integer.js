(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(["knockout", "accounting"], factory);
	} else {
		// Browser globals
		factory(ko, accounting);
	}
}(this, function (ko, acct) {
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
}));