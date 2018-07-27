const Vue = import('/node_modules/vue/dist/vue.js');
const Builder = import('/builder.vue');

let app = new Vue({
  el:'#app',
  components:{
    'builder': Builder
  }
})
