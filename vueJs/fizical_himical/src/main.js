// файл-точка входа в приложение

import Vue from 'vue'
import App from './App.vue'		// root module ( в него подключаются остальные модули на данный момент)

new Vue({
  el: '#app',
  render: h => h(App)
})
