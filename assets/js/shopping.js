angular.module('mod2', ['common']).controller('invoiceController2', ['currencyConvertor', function() {
	this.qty = 5;
	this.price = 2;
	this.curr = 'EUR';
	this.currencies = currencyConvertor.currencies;
	this.REtoCurrencies = {
		CNY: 1,
		EUR: 100,
		USD: 70.12
	};
	this.total = function total(outcurr) {
		return currencyConvertor.convertCurrency(this.qty * this.price, this.curr, outcurr);
	};
	this.pay = function paid() {
		alert('Thank you , Visit again!!');
	};
}]);