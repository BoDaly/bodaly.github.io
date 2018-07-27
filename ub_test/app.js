import Vue from 'https://bodaly.github.io/ub_test/node_modules/vue/dist/vue.js';
import Builder from 'https://bodaly.github.io/ub_test/builder.vue';

let app = new Vue({
  el:'#app',
  components:{
    'builder': Builder
  }
})
