<template>
    <div>

  <div>
    
    <main-page></main-page> 
  </div>


<!--       <div >
        <question-table></question-table>
      </div>  -->

<!-- 
      <div >
        <custom-table></custom-table>
      </div> -->

<!--       <div>
        <btn-sentData> </btn-sentData>
      </div> -->

<!--     <div>
      <last></last>
    </div> -->


    </div>
</template>

<script>
// импортируем spm(single page module )
import Question from './Question.vue'     // step 1 - заполнение имен элементов
import Table from './Table.vue'           // step 2 - заполнение основной таблицы с данными


import last from './last.vue'

import main_page from './main_page.vue'

export default {
  // data () {
  //   return {
  //     
  //   }
  // }
  components : {
   'question-table' : Question,     // обзываем spm  можно и просто по имени которому импортировали его использовать
   'custom-table' : Table ,
   'btn-sentData' : setServer,
   last,
   'main-page' : main_page

  }
}
</script>

<style lang="scss">

</style>
