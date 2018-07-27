import Vue from '/node_modules/vue/dist/vue.js';
import Builder from 'builder.vue';

let app = new Vue({
  el:'#app',
  components:{
    'builder': Builder
  }
})
