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
		},
		getMonthName: function(month) {
			var monthName;
			switch(month) {
				case 0:
					monthName = "January";
					break;
				case 1:
					monthName = "February";
					break;
				case 2:
					monthName = "March";
					break;
				case 3:
					monthName = "April";
					break;
				case 4:
					monthName = "May";
					break;
				case 5:
					monthName = "June";
					break;
				case 6:
					monthName = "July";
					break;
				case 7:
					monthName = "August";
					break;
				case 8:
					monthName = "September";
					break;
				case 9:
					monthName = "October";
					break;
				case 10:
					monthName = "November";
					break;
				case 11:
					monthName = "December";
					break;
			}
			return monthName;
		},
		getMonthsFromToday: function() {
			var date = new Date();
			var thisMonth = date.getMonth();
			//TODO: Make months have this format: [{11:2014,0:2015,1:2015,2:2015}]
			var months = [];
			//Add This Month
			months.push(thisMonth);
			//Get Next Month
			if(thisMonth === 11) {
				months.push(0);
			}
			else {
				months.push((thisMonth+1));
			}
			//Get Two Months from Now
			if(thisMonth === 10) {
				months.push(0);
			}
			else if(thisMonth === 11) {
				months.push(1);
			}
			else {
				months.push((thisMonth+2));
			}
			//Get Three Months from Now
			if(thisMonth === 9) {
				months.push(0);
			}
			else if(thisMonth === 10) {
				months.push(1);
			}
			else if(thisMonth === 11) {
				months.push(2);
			}
			else {
				months.push((thisMonth+3));
			}
			//TODO: If screen is tablet size, make service return 6 months.
			return months;
		}
	};
}]);
