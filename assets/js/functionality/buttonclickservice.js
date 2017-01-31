angular.module('new', []).controller('MyController', ['$scope','name', function($scope,name) {
	$scope.message = 'hey';
	$scope.callNotify = function(message) {
		name(message);
	};

}]).factory('name',[ '$window',function(window) {
	var msg = [];
	return function watever(message) {
		msg.push(message);
		if (msg.length == 3) {
			alert(msg.join('\n'));
			msg = [];
		}
	};
}]);