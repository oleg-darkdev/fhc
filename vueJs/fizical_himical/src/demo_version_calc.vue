<template>
	
<!--       <div >
        <question-table></question-table>
      </div>  -->

<!-- 
      <div >
        <table-small></table-small>
      </div> -->

</template>


<script>
// импортируем spm(single page module )
import Question from './Question.vue'     // step 1 - заполнение имен элементов
import table-small from './Table-small.vue'           // step 2 - заполнение основной таблицы с данными
	
	export default {
	  data () {
	    return {
	  		
	      
	    }
	  },
	  components : { 
	   table-small,
		question 
		}            
	}



</script>