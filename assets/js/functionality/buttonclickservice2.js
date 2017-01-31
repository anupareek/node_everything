angular.module('new2', []).controller('MyController2', ['$scope','name', function($scope,name) {
	this.message = 'hey';
	this.callNotify = function(message) {
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