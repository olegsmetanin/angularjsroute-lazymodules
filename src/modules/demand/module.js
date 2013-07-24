angular.module('demand', ['dependence'])
    .controller('demand', ['$scope', function ($scope) {
        $scope.header = 'load on demand controller';
    }])
	.controller('demand2', ['$scope', function ($scope) {
        $scope.header2 = 'load on demand2 controller zzzzzzzzzzzzzzz';
    }]);