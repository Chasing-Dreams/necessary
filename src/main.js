// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入固定宽度样式
import './assets/js/Change the viewport.js'
//引入默认样式
import './assets/stylus/reset.styl'
//引入字体
import  './assets/stylus/style.styl'; 
//引入axios
import Axios from 'axios'
Vue.prototype.$http = Axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
