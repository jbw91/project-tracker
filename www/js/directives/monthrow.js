angular.module('starter.directives')
	.directive('monthrow', ['MonthDates', function (MonthDates) {
	return {
		templateUrl: 'templates/month-row.html',
		restrict: 'E',
		link: function($scope) {
			function setup() {
				$scope.monthsToShow = MonthDates.getMonthsFromToday();
				$scope.monthNames = [];
				for(var i = 0; i < $scope.monthsToShow.length; i++) {
					$scope.monthNames.push(MonthDates.getMonthName($scope.monthsToShow[i]));
				}
				console.log($scope.monthsToShow);
				console.log($scope.monthNames);
			}

			setup();
		}
	};
}]);
