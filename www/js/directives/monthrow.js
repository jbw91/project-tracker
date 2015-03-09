angular.module('starter.directives')
	.directive('monthrow', [ function () {
	return {
		templateUrl: 'templates/month-row.html',
		restrict: 'E',
		link: function($scope) {

			function getMonths(thisMonth) {
				var months = [];
				//Get Last Month
				if(thisMonth === 0) {
					months.push(11);
				}
				else {
					months.push((thisMonth-1));
				}
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
				return months;
			}

			function setup() {
				var date = new Date();
				date.setMonth(date.getMonth()-3);
				var thisMonth = date.getMonth();
				var monthsToShow = getMonths(thisMonth);
				console.log(monthsToShow);
			}

			setup();
		}
	};
}]);
