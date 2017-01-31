angular.module('buttonclicks', []).controller('buttonContr', function () {
	this.value = 'havent clicked anything';
	this.click1 = function(){
		this.value='click1';
	};
this.click2 = function(){
		this.value='click2';
	};
});