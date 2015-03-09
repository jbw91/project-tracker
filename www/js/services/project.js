angular.module('starter.services')

.service('Project', ['Resourcify', function Project(Resourcify) {
	// AngularJS will instantiate a singleton by calling "new" on this function


	var ProjectBuilder = new Resourcify('Project', '../../data/roadmap.json', {
		usePromise:true
	})
	.request({method: 'GET', name: 'query', isArray: true, isInstance: false});

	return ProjectBuilder.create();
}]);
