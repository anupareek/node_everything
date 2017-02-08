angular.module('filterModule', []).filter('myfilter', function() {
		return function(input, flag) {
			var out = '';
			for (var i = 0; i < input.length; i++) {
				out = input.charAt(i) + out;
			}
			if (flag) {
				out = out.toUpperCase();
			}
			return out;
		};
	})
	.controller('filterController', ['$scope','myfilterFilter', function($scope,myfilterFilter) {
		$scope.a = 'hello';
		$scope.filterInControllerA = myfilterFilter($scope.a);

	}]);