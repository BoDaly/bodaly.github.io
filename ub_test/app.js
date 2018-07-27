import Vue from '/vue/dist/vue.js'
import Builder from 'builder.vue'

let app = new Vue({
  el:'#app',
  components:{
    'builder': Builder
  }
})
