import Vue from 'ub_test/node_modules/vue/dist/vue.js';
import Builder from 'ub_test/builder.vue';

let app = new Vue({
  el:'#app',
  components:{
    'builder': Builder
  }
})
