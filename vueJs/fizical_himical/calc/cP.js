const elements = require( "./dataClient.json");


module.exports = function(e) { //------------------------------------------------------

          // STEP 3

//------------------------------------------------------
let $oneResultdA,$oneResultdB,$oneResultdC;


/* 
				ВЫВОДИТ РЕЗУЛЬТАТ ДЛЯ ОДНГО УРАВНЕНИЯ


*/
// // температурная зависимость теплоемкости при протекании реакции - (дельты) добавить к переменным d
return {
// а
$oneResultdA :elements.elThree.a -(elements.elOne.a + elements.elTwo.a),
// b
$oneResultdB : elements.elThree.b -(elements.elOne.b + elements.elTwo.b),
// c
$oneResultdC : elements.elThree.c -(elements.elOne.c + elements.elTwo.c)
}


/* 
				ВЫВОДИТ РЕЗУЛЬТАТ ДЛЯ ДВУХ УРАВНЕНИЙ СРАЗУ


*/

// // температурная зависимость теплоемкости при протекании реакции - (дельты) добавить к переменным d
// // а
// $oneResultdA = elements.elThree.a -(elements.elOne.a + elements.elTwo.a);
// // b
// $oneResultdB = elements.elThree.b -(elements.elOne.b + elements.elTwo.b);
// // c
// $oneResultdC = elements.elThree.c -(elements.elOne.c + elements.elTwo.c);


// // температурная зависимость теплоемкости при протекании реакции - (дельты) добавить к переменным d
// // а
// $twoResultdA = elements.twoelThree.a -(3 * elements.elOne.a + elements.elTwo.a);
// // b
// $twoResultdB = elements.twoelThree.b -(3 * elements.elOne.b + elements.elTwo.b);
// // c
// $twoResultdC = elements.twoelThree.c -(3 * elements.elOne.c + elements.elTwo.c);



// console.log('dA = ' + $resultdA);
// console.log('dB = ' + $resultdB);
// console.log('dC = ' + $resultdC);

};


