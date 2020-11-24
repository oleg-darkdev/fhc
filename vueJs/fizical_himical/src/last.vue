<template>
<div>  
    <div>
      <!-- по нажатию кнопки данные уходят на сервер -->
        <button v-on:click="postPost"> Go!!</button>
    </div>
    <div>
        <!-- ошибки вылетают и радуют глаз -->
          <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      postBody: {   // пример данных для отправки(позже они преобразуются в json)
        name : ' michail ',
        ade : 22
      },
      errors: []    // массив для записи ошибок
    }
  },

  // Pushes posts to the server when called.
  methods: {
  postPost : function () {
const str = JSON.stringify(this.postBody);
axios.post('http://localhost:8081/', str)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
      }
    }
}
</script>