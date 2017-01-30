angular.module('CommonCtrl', [])
	.factory('currencyConvertor', function() {

		var currencies = ['EUR', 'USD', 'CNY'];
		var REtoCurrencies = {
			CNY: 1,
			EUR: 100,
			USD: 70.12
		};

		var convertCurrency = function (amount, incurr, outCurr) {
			return amount * REtoCurrencies[outCurr] / REtoCurrencies[incurr];
		};

		return {
			currencies: currencies,
			convert: convertCurrency
		};
	});