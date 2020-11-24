<template>
	
<!--       <div >
        <question-table></question-table>
      </div>  -->

<!-- 
      <div >
        <table-elements></table-elements>
      </div> -->

</template>


<script>
// импортируем spm(single page module )
import Question from './Question.vue'     // step 1 - заполнение имен элементов
import Table from './Table.vue'           // step 2 - заполнение основной таблицы с данными
	
	export default {
	  data () {
	    return {
	  		
	      
	    }
	  },
	  	  components : { 
	   'table-elements': Table,
		question 
		}                
	}



</script>