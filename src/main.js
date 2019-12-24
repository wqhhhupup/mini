import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import toast from 'common/toast'
import { Swipe, SwipeItem } from 'vant';
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import { Toast } from 'vant';

Vue.use(Toast);



//
// Vue.use(toast)

Vue.use(Swipe).use(SwipeItem);
// 解决移动端的300ms点击 延迟的问题
FastClick.attach(document.body)
// 图片懒加载
Vue.use(VueLazyLoad,{
loading:require('assets/img/placeholder.png')
})



Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  router,
  store,

}).$mount('#app')
