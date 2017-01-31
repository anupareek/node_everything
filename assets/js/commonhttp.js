angular.module('CommonHttpCtrl', [])
	.factory('currencyConvertor', ['$http', function($http) {

		var yahoo = '//query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.xchange where pair in ("PAIRS")&format=json&env=store://datatables.org/alltableswithkeys';
		var currencies = ['EUR', 'USD', 'CNY'];
		var REtoCurrencies = {

		};

		var convertCurrency = function(amount, incurr, outCurr) {
			return amount * REtoCurrencies[outCurr] / REtoCurrencies[incurr];
		};

		var refresh = function() {
			var url = yahoo.replace('PAIRS', 'USD' + currencies.join('","USD'));
			return $http.get(url).then(function(response) {
				var newRates = {};
				angular.forEach(response.data.query.results.rate, function(rate) {
					var currency = rate.id.substring(3, 6);
					newRates[currency] = window.parseFloat(rate.Rate);
				});
				REtoCurrencies = newRates;
			});
		};
		refresh();
		return {
			currencies: currencies,
			convert: convertCurrency
		};
	}]);