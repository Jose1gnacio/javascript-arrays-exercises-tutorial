let arrayOfCelsiusValues = [-2,34,56,-10];

let arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value){
	
	//add your code here and return the new value
		let valor  = (value * 9 / 5) +32;
		return valor;
	
});

console.log(arrayOfFahrenheitValues);