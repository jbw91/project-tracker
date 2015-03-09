angular.module('starter.directives')
	.directive('roadmap', ['Project', function (Project) {
	return {
		restrict: 'A',
		link: function($scope) {

			function setup() {
				Project.query().then(function(projects) {
					$scope.projects = projects;
				});
			}

			setup();
		}
	};
}]);
