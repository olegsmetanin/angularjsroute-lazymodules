angular.module('app', ['loadOnDemand'])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
            .when('/home', { template: '<h1>HomePage</h1>' })
            .otherwise({ redirectTo: '/home' });
    }])
    .config(['$loadOnDemandProvider', function ($loadOnDemandProvider) {
        var modules = [
            {
                name: 'demand',
                script: 'src/modules/demand/module.js',
                template: 'src/modules/demand/templates.html'
            },
			{
                name: 'order',
                script: 'src/modules/order/module.js',
                template: 'src/modules/order/templates.html'
            },
            {
                name: 'dependence',
                script: 'src/modules/demand/dependence.js'
            }
        ];

        $loadOnDemandProvider.config(modules);
    }]);