angular.module('order', [])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/order', { template: '<div load-on-demand="\'order\'" template-id="order-main"></div>' })
			.when('/order2', { template: '<div load-on-demand="\'order\'" template-id="order-other"></div>' })
    }]);