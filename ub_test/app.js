const Vue = import('ub_test/node_modules/vue/dist/vue.js');
const Builder = import('ub_test/builder.vue');

let app = new Vue({
  el:'#app',
  components:{
    'builder': Builder
  }
})
