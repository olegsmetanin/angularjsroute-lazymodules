angular.module('demand', [])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	
        $routeProvider
            .when('/demand', { template: '<div load-on-demand="\'demand\'" template-id="demand-main"></div>' })
			.when('/demand2', { template: '<div load-on-demand="\'demand\'" template-id="demand-other"></div>' })
			
    }]);