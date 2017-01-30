angular.module('common', [])
	.factory('currencyConvertor', ['', function() {

		this.currencies = ['EUR', 'USD', 'CNY'];
		this.REtoCurrencies = {
			CNY: 1,
			EUR: 100,
			USD: 70.12
		};

		this.convertCurrency = function convertCurrency(amount, incurr, outCurr) {
			return amount * this.REtoCurrencies[outCurr] / this.REtoCurrencies[incurr];
		};

		return {
			currencies: currencies,
			convertCurrency: convertCurrency
		};
	}]);