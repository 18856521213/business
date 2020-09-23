import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Api from "./mock/index.js"
//引入vant组件库
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.prototype.Api = Api;
Vue.use(Vant)


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
