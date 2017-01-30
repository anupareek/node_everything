angular.module('mod2', ['CommonCtrl'])
.controller('InvoiceCtrl', ['currencyConvertor', function InvoiceCtrl(currencyConvertor) {
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
		return currencyConvertor.convert(this.qty * this.price, this.curr, outcurr);
	};
	this.pay = function paid() {
		alert('Thank you , Visit again!!');
	};
}



]);