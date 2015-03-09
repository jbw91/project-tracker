angular.module('starter.services')

.factory('MonthDates', [function MonthDates() {
	return {
		getNumDays: function(month) {
			var numDays;
			switch(month) {
				case 0:
					numDays = 31;
					break;
				case 1:
					numDays = 28;
					break;
				case 2:
					numDays = 31;
					break;
				case 3:
					numDays = 30;
					break;
				case 4:
					numDays = 31;
					break;
				case 5:
					numDays = 30;
					break;
				case 6:
					numDays = 31;
					break;
				case 7:
					numDays = 31;
					break;
				case 8:
					numDays = 30;
					break;
				case 9:
					numDays = 31;
					break;
				case 10:
					numDays = 30;
					break;
				case 11:
					numDays = 31;
					break;
			}
			return numDays;
		}
	};
}]);
