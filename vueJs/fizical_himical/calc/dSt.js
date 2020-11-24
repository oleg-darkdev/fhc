module.exports = function(n , $oneResultdS298 , $oneResultdA ,$oneResultdB , $oneResultdC) { 
//------------------------------------------------------

          // STEP 5

//------------------------------------------------------


/* 
        ВЫВОДИТ РЕЗУЛЬТАТ ДЛЯ ОДНГО УРАВНЕНИЯ

*/

            var m = 0,masOneResultFormuladSt = [],oneResultFormula = 0,T400 = 400,stepTemperature = 200; 
             

            for (;T400 <= 1200; ++m) {

            // формула ДЛЯ РАСЧЕТА
             oneResultFormula =  $oneResultdS298 + ($oneResultdA * Math.log( T400 / 298 )) + ($oneResultdB * ( T400 - 298 )) + ($oneResultdC / 2 * (Math.pow(298,-2) - (Math.pow(T400,-2))))
             

             masOneResultFormuladSt[m] = oneResultFormula;
          


            T400 += stepTemperature;
            
            }

return masOneResultFormuladSt[n];          



/* 
        ВЫВОДИТ РЕЗУЛЬТАТ ДЛЯ ДВУХ УРАВНЕНИЙ СРАЗУ

*/

            // var m = 0,masOneResultFormuladSt = [],masTwoResultFormuladSt = [],oneResultFormula = 0,twoResultFormularesultFormula = 0,T400 = 400,stepTemperature = 200; 

//        function masdStOne( n ) {   // массив результатов расчетов для dSt при разных температурах с шагом в 200 градусов

//             var m = 0,masOneResultFormuladSt = [],masTwoResultFormuladSt = [],oneResultFormula = 0,twoResultFormularesultFormula = 0,T400 = 400; 
             

//             for (;T400 <= 1200; ++m) {
//             //mas[m] = new Array();

//             // формула ДЛЯ РАСЧЕТА
//              oneResultFormula =  $oneResultdS298 + ($oneResultdA * Math.log( T400 / 298 )) + ($oneResultdB * ( T400 - 298 )) + ($oneResultdC / 2 * (Math.pow(298,-2) - (Math.pow(T400,-2))))
             

//              masOneResultFormuladSt[m] = oneResultFormula;
          


//             T400 += stepTemperature;
            
//             }

// return masOneResultFormuladSt[n];          }





//        function masdStTwo( n ) {   // массив результатов расчетов для dSt при разных температурах с шагом в 200 градусов

//             var m = 0,masOneResultFormuladSt = [],masTwoResultFormuladSt = [],oneResultFormula = 0,twoResultFormularesultFormula = 0,T400 = 400; 
             

//             for (;T400 <= 1200; ++m) {
//             //mas[m] = new Array();

//             // формула ДЛЯ РАСЧЕТА
//              twoResultFormula =  $twoResultdS298 + ($twoResultdA * Math.log( T400 / 298 )) + ($twoResultdB * ( T400 - 298 )) + ($twoResultdC / 2 * (Math.pow(298,-2) - (Math.pow(T400,-2))))
             

//              masTwoResultFormuladSt[m] = twoResultFormula;
          


//             T400 += stepTemperature;
            
//             }

// return masTwoResultFormuladSt[n];          }

 };


