module.exports = function( n , masdHtOne , masdStOne ) {



// //------------------------------------------------------

//           // STEP 6

// //------------------------------------------------------

/* 
        ВЫВОДИТ РЕЗУЛЬТАТ ДЛЯ ОДНГО УРАВНЕНИЯ

*/


            var m = 0,masOneResultFormula = [],oneResultFormula = 0,T400 = 400,stepTemperature = 200; 
             

            for (;T400 <= 1200; ++m) {
            //mas[m] = new Array();

            // формула ДЛЯ РАСЧЕТА
            oneResultFormula =  masdHtOne -  (T400 * masdStOne);
            // 

            masOneResultFormula[m] = oneResultFormula;
            // 
          


            T400 += stepTemperature;
            
            }

             return masOneResultFormula[n];  








/* 
        ВЫВОДИТ РЕЗУЛЬТАТ ДЛЯ ДВУХ УРАВНЕНИЙ СРАЗУ

*/

            // var m = 0,masOneResultFormula = [],masTwoResultFormula = [],oneResultFormula = 0,twoResultFormularesultFormula = 0,T400 = 400,stepTemperature = 200; 


// function masdGtOne (n) {   // массив результатов расчетов для dSt при разных температурах с шагом в 200 градусов

//             var m = 0,masOneResultFormula = [],masTwoResultFormula = [],oneResultFormula = 0,twoResultFormularesultFormula = 0,T400 = 400; 
             

//             for (;T400 <= 1200; ++m) {
//             //mas[m] = new Array();

//             // формула ДЛЯ РАСЧЕТА
//             oneResultFormula =  masdHtOne(n) -  (T400 * masdStOne(m ))
//             // 

//             masOneResultFormula[m] = oneResultFormula;
//             // 
          


//             T400 += stepTemperature;
            
//             }

//              return masOneResultFormula[n];  //, masTwoResultFormula[n]
//           }



// function masdGtTwo(n) {   // массив результатов расчетов для dSt при разных температурах с шагом в 200 градусов

//             var m = 0,masOneResultFormula = [],masTwoResultFormula = [],oneResultFormula = 0,twoResultFormularesultFormula = 0,T400 = 400; 
             

//             for (;T400 <= 1200; ++m) {
//             //mas[m] = new Array();

//             // формула ДЛЯ РАСЧЕТА
//             // 
//             twoResultFormula =  masdHtTwo(n) -  (T400 * masdStTwo(m ));

//             // 
//             masTwoResultFormula[m] = twoResultFormula; 
          


//             T400 += stepTemperature;
            
//             }

//              return masTwoResultFormula[n];  //, masTwoResultFormula[n]
//           }
 };


