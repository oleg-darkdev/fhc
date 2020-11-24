const calc = require('./calc/index');

/*
		calc.dH();								// Step 1
		calc.dS();								// Step 2
		calc.cP();								// Step 3
		calc.dHt();								// Step 4
		calc.dSt();								// Step 5
		calc.dGt();								// Step 6

*/



/*

						for test the calculate results 

*/

console.log(' Результаты ентальпии')
console.log(calc.dH());													// Step 1
console.log(' Результаты ентропии')
console.log(calc.dS());													// Step 2

console.log(' Результаты температурной зависимости')
console.log(calc.cP().$oneResultdA) 									// Step 3
console.log(calc.cP().$oneResultdB) 									// Step 3
console.log(calc.cP().$oneResultdC) 									// Step 3
// console.log(calc.cP())

console.log(' Результаты зависимости ентальпии от температуры (dHt) ')
console.log(calc.dHt(0 , calc.dH(),calc.cP().$oneResultdA ,				// Step 4
 calc.cP().$oneResultdB ,calc.cP().$oneResultdC ));						// Step 4

console.log(' Результаты зависимости ентропи от температуры (dSt) ')
console.log(calc.dSt(0 , calc.dS(),calc.cP().$oneResultdA , 			// Step 5
calc.cP().$oneResultdB ,calc.cP().$oneResultdC ));						// Step 5

const dHt = calc.dHt(0 , calc.dH(),calc.cP().$oneResultdA ,				// variables for Step 6		
	  calc.cP().$oneResultdB ,calc.cP().$oneResultdC );					// Step 6
const dSt = calc.dSt(0 , calc.dS(),calc.cP().$oneResultdA ,			    // variables for Step 6
	  calc.cP().$oneResultdB ,calc.cP().$oneResultdC );					// Step 6


console.log(' Результаты Gt для графика');
console.log(calc.dGt(0 , dHt , dSt));									// Step 6









/* 
				ВЫВОДИТ РЕЗУЛЬТАТ ДЛЯ ОДНГО УРАВНЕНИЯ


*/




/* 
				ВЫВОДИТ РЕЗУЛЬТАТ ДЛЯ ДВУХ УРАВНЕНИЙ СРАЗУ


*/
//console.log(calc.dH().$oneResultdH298);			console.log(calc.dH().$twoResultdH298);
//console.log(calc.dH().$oneResultdS298);			console.log(calc.dH().$twoResultdS298);


// calc.dS('dS');
// calc.cP('cP');
// calc.dHt('dHt');
// calc.dSt('dSt');
// calc.dGt('dGt');