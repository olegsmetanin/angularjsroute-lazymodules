angular.module('order', [])
    .controller('order', ['$scope', function ($scope) {
        $scope.header = 'load on order controller';
    }])
	.controller('order2', ['$scope', function ($scope) {
        $scope.header2 = 'load on order2 controller';
    }]);