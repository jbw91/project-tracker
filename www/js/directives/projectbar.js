angular.module('starter.directives')
	.directive('projectbar', [ function () {
	return {
		templateUrl: 'templates/projectbar.html',
		restrict: 'E',
		scope: {
			'project': '='
		},
		link: function($scope) {
			$scope.calculateWidth = function(project) {
				// 1) Determine how many full months are displayed, add 25% for each month
				// 2) For any month that is not complete, determine what percentage of 25% is the correct percentage
				// 3) Determine the offset from the left if there exists one.
				//     a) There will be an offset if the start of the project is after the first day of the
				//        first month displayed.
				//     b) The offset is whatever percentage is left from the percentage of 25%.

				// Get diff of months
				var start = new Date(project.startDate);
				var end = new Date(project.endDate);
				var diff = end.getMonth() - start.getMonth();
				// If negative, find positive equivalent, +1 to compensate for starting from 0.
				if(diff < 0) {
					diff = 11-(diff*-1)+1;
				}

				// Check to see if month range spans new year.
				// if(monthRange[0] > monthRange[3]) {
				// }
			};

			function setup() {
				$scope.calculateWidth($scope.project);
			}

			setup();
		}
	};
}]);
