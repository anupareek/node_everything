angular.module('mod1',[]).controller('invoiceController',function invoiceController(){
	this.qty = 5;
this.price = 2;
	this.curr = 'EUR';
	this.currencies =['EUR','USD','RE']
	this.REtoCurrencies ={
	RE:1,
	EUR: 100,
	USD: 70.12
	};

this.total = function totalprice(outcurr){
	return this.convertCurrency(this.qty * this.price, this.inCurr, outCurr);
}

this.convertCurrency = function convertCurrency(amount, incurr,outCurr ){
	return amount* this.currencies[incurr]/this.currencies[outCurr];
}

this.pay = function paid(){
	alter('Thank you , Visit again!!');
}

});