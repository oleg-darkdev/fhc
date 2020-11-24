module.exports = function(n ,$oneResultdH298, $oneResultdA ,$oneResultdB , $oneResultdC) { 
//------------------------------------------------------

          // STEP 4

//------------------------------------------------------      

/* 
        ВЫВОДИТ РЕЗУЛЬТАТ ДЛЯ ОДНГО УРАВНЕНИЯ


*/
            var m = 0,masOneResultFormuladHt = [],oneResultFormuladHt = 0,T400 = 400,stepTemperature = 200; 
             

            for (;T400 <= 1200; ++m) {
            //mas[m] = new Array();

            // формула ДЛЯ РАСЧЕТА
             oneResultFormuladHt =  $oneResultdH298 + ($oneResultdA * (T400 - 298)) + (($oneResultdB / 3 ) * ((Math.pow(T400,2) - (Math.pow(298,2))))) + ($oneResultdC * (Math.pow(298,-1) -  (Math.pow(T400,-1)))); 
            

             masOneResultFormuladHt[m] = oneResultFormuladHt;
          
  
            T400 += stepTemperature;



            



            }


    return  masOneResultFormuladHt[n];








/* 
        ВЫВОДИТ РЕЗУЛЬТАТ ДЛЯ ДВУХ УРАВНЕНИЙ СРАЗУ


*/

//       function masdHtOne(n) {   // массив результатов расчетов для dHt при разных температурах с шагом в 200 градусов

//             var m = 0,masOneResultFormuladHt = [],masTwoResultFormuladHt = [],oneResultFormuladHt = 0,twoResultFormularesultFormuladHt = 0,T400 = 400; 
             

//             for (;T400 <= 1200; ++m) {
//             //mas[m] = new Array();

//             // формула ДЛЯ РАСЧЕТА
//              oneResultFormuladHt =  $oneResultdH298 + ($oneResultdA * (T400 - 298)) + (($oneResultdB / 3 ) * ((Math.pow(T400,2) - (Math.pow(298,2))))) + ($oneResultdC * (Math.pow(298,-1) -  (Math.pow(T400,-1)))); 
            

//              masOneResultFormuladHt[m] = oneResultFormuladHt;
          
  
//             T400 += stepTemperature;
            
//             }

// return  masOneResultFormuladHt[n];
//        }





//       function masdHtTwo(n) {   // массив результатов расчетов для dHt при разных температурах с шагом в 200 градусов

//             var m = 0,masOneResultFormuladHt = [],masTwoResultFormuladHt = [],oneResultFormuladHt = 0,twoResultFormularesultFormuladHt = 0,T400 = 400; 
             

//             for (;T400 <= 1200; ++m) {
//             //mas[m] = new Array();

//             // формула ДЛЯ РАСЧЕТА
//              twoResultFormuladHt =  $twoResultdH298 + ($twoResultdA * (T400 - 298)) + (($twoResultdB / 3 ) * ((Math.pow(T400,2) - (Math.pow(298,2))))) + ($twoResultdC * (Math.pow(298,-1) -  (Math.pow(T400,-1)))); 
            

//              masTwoResultFormuladHt[m] = twoResultFormuladHt;
          

//             T400 += stepTemperature;
            
//             }

// return      masTwoResultFormuladHt[n]     }

          //
          // console.log(masdHt(0));   // массив результатов расчетов для dHt при разных температурах с шагом в 200 градусов
};


