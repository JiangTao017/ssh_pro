import Vue from 'vue'
import App from './App.vue'
import router from './router'
import setRem from "../setRem";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import Vant from 'vant';
// import 'vant/lib/index.css';

// Vue.use(Vant);
Vue.use(ElementUI);
Vue.config.productionTip = false
if(process.env.NODE_ENV === "development"){
  require('./mock/index.js')
}
setRem(600, 100);
window.addEventListener("resize", function () {
  setRem(600, 100);
});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
