"use strict";

var cube = function(input){

	var result;

	for (var i = 0; i < input; i++) {

		var rest = input % i;

		if(rest == 0){
			var divideResult = input / rest;

			if(divideResult == i){
				result = i;
			}
		}
	};

	return result;
};